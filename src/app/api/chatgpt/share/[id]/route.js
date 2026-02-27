import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export const dynamic = 'force-dynamic';

export async function GET(req, res) {
  const { id } = res.params;

  // Check if the ID is the placeholder and handle accordingly
  if (id === "placeholder-id") {
    return NextResponse.json({ message: "This is a placeholder" });
  }

  try {
    const html = await fetch(`https://chatgpt.com/share/${id}`).then((rsp) =>
      rsp.text()
    );
    const dom = new JSDOM(html);
    const nextDataScript = dom.window.document.querySelector(
      "script#__NEXT_DATA__"
    );

    if (nextDataScript) {
      return new Response(nextDataScript.textContent, {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      console.log('Script with id "__NEXT_DATA__" not found.');
      return NextResponse.json({ message: "Script not found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 }
    );
  }
}

export async function generateStaticParams() {
  // Provide a minimal set of known IDs or a placeholder
  return [
    {
      id: "placeholder-id", // Placeholder ID
    },
  ];
}
