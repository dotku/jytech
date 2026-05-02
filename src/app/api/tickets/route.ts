import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const SUPPORT_INBOX = process.env.SUPPORT_INBOX ?? "support@jytech.us";
const SUPPORT_FROM =
  process.env.SUPPORT_FROM ?? "JY Tech Support <support@jytech.us>";
const RESEND_API_KEY = process.env.RESENDER ?? process.env.RESEND_API_KEY;

type TicketBody = {
  name?: string;
  email?: string;
  plan?: string;
  subject?: string;
  message?: string;
  orderRef?: string;
  locale?: string;
};

function makeTicketId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `JYT-${ts}-${rnd}`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(args: {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}): Promise<{ ok: boolean; provider: "resend" | "noop"; error?: string }> {
  if (!RESEND_API_KEY) {
    return { ok: true, provider: "noop" };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: args.from,
        to: [args.to],
        reply_to: args.replyTo,
        subject: args.subject,
        html: args.html,
        text: args.text,
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      return { ok: false, provider: "resend", error: txt };
    }
    return { ok: true, provider: "resend" };
  } catch (err) {
    return {
      ok: false,
      provider: "resend",
      error: err instanceof Error ? err.message : "unknown",
    };
  }
}

export async function POST(request: NextRequest) {
  let body: TicketBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const plan = body.plan?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const orderRef = body.orderRef?.trim() ?? "";
  const locale = body.locale?.trim() ?? "en";

  if (!name || !email || !plan || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (subject.length > 140 || message.length > 8000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const ticketId = makeTicketId();
  const submittedAt = new Date().toISOString();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";
  const userAgent = request.headers.get("user-agent") || "";

  const sql = getDb();
  let dbId: number | null = null;
  try {
    const rows = (await sql`
      INSERT INTO support_tickets
        (ticket_code, name, email, plan, subject, message, order_ref, locale, ip, user_agent)
      VALUES
        (${ticketId}, ${name}, ${email}, ${plan}, ${subject}, ${message},
         ${orderRef || null}, ${locale}, ${ip || null}, ${userAgent || null})
      RETURNING id
    `) as { id: number }[];
    dbId = rows[0]?.id ?? null;
  } catch (err) {
    console.error("ticket persist failed:", err);
    return NextResponse.json(
      { error: "Could not save ticket — please try again" },
      { status: 500 },
    );
  }

  const text = [
    `Ticket: ${ticketId}`,
    `Submitted: ${submittedAt}`,
    `Locale: ${locale}`,
    `Plan: ${plan}`,
    `Name: ${name}`,
    `Email: ${email}`,
    orderRef ? `Order ref: ${orderRef}` : null,
    `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px;">
      <h2 style="margin:0 0 8px 0;">New support ticket: ${escapeHtml(ticketId)}</h2>
      <p style="color:#666; margin:0 0 16px 0;">${escapeHtml(submittedAt)} · ${escapeHtml(locale)}</p>
      <table style="border-collapse: collapse; width:100%; margin-bottom:16px;">
        <tr><td style="padding:6px 0; color:#666; width:120px;">Plan</td><td style="padding:6px 0;"><strong>${escapeHtml(plan)}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#666;">Name</td><td style="padding:6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${orderRef ? `<tr><td style="padding:6px 0; color:#666;">Order ref</td><td style="padding:6px 0;"><code>${escapeHtml(orderRef)}</code></td></tr>` : ""}
        <tr><td style="padding:6px 0; color:#666;">Subject</td><td style="padding:6px 0;"><strong>${escapeHtml(subject)}</strong></td></tr>
      </table>
      <div style="border-top:1px solid #eee; padding-top:16px; white-space: pre-wrap; line-height:1.6;">${escapeHtml(message)}</div>
    </div>
  `;

  const inboxResult = await sendEmail({
    to: SUPPORT_INBOX,
    from: SUPPORT_FROM,
    replyTo: email,
    subject: `[${ticketId}] ${subject}`,
    html,
    text,
  });

  const ackText = [
    `Hi ${name},`,
    "",
    `Thanks for reaching out to JY Tech support. We've received your ticket ${ticketId} and will reply by email — typically within one business day.`,
    "",
    `Subject: ${subject}`,
    "",
    "— JY Tech Support",
  ].join("\n");
  const ackHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out to JY Tech support. We've received your ticket <strong>${escapeHtml(ticketId)}</strong> and will reply by email — typically within one business day.</p>
      <p style="color:#666; border-left:3px solid #ddd; padding-left:12px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p style="margin-top:24px;">— JY Tech Support</p>
    </div>
  `;
  await sendEmail({
    to: email,
    from: SUPPORT_FROM,
    replyTo: SUPPORT_INBOX,
    subject: `[${ticketId}] We received your ticket: ${subject}`,
    html: ackHtml,
    text: ackText,
  });

  if (dbId !== null) {
    try {
      await sql`
        UPDATE support_tickets
        SET email_sent = ${inboxResult.ok},
            email_error = ${inboxResult.ok ? null : inboxResult.error ?? "unknown"},
            updated_at = NOW()
        WHERE id = ${dbId}
      `;
    } catch (err) {
      console.error("ticket email-status update failed:", err);
    }
  }

  console.log("New support ticket:", {
    ticketId,
    dbId,
    submittedAt,
    locale,
    plan,
    name,
    email,
    orderRef,
    subject,
    messagePreview: message.slice(0, 200),
    emailDelivery: inboxResult,
  });

  return NextResponse.json({ success: true, ticketId });
}
