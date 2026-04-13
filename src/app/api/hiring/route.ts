import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, position, location, resumeLink, message, locale } = body;

    // Validate required fields
    if (!name || !email || !position) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, position" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the application (replace with database/email integration later)
    console.log("New hiring application received:", {
      name,
      email,
      phone,
      position,
      location,
      resumeLink,
      message,
      locale,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
