import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export const dynamic = 'force-dynamic';

export async function GET(_request, { params }) {
  const { feature } = params;

  switch (feature) {
    case "share":
      // Handle entityA specific logic
      const html = await fetch(
        "https://chatgpt.com/share/da518074-ec44-4789-9a2d-4466fa94be02"
      ).then((rsp) => rsp.text());

      const dom = new JSDOM(html);
      const nextDataScript = dom.window.document.querySelector(
        "script#__NEXT_DATA__"
      );

      if (nextDataScript) {
        // Extract the content
        console.log(nextDataScript.textContent);
        // var nextDataContent = JSON.parse(nextDataScript.textContent);
        return new Response(nextDataScript.textContent, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        console.log('Script with id "__NEXT_DATA__" not found.');
      }
      return NextResponse.json({ message: "Hello from entityA" });

    case "entityB":
      // Handle entityB specific logic
      return NextResponse.json({ message: "Hello from entityB" });

    default:
      // Handle unknown entity
      return NextResponse.json(
        { message: "Entity not found" },
        { status: 404 }
      );
  }
}

// Add the generateStaticParams function
export async function generateStaticParams() {
  // Replace this with your logic to fetch all the features
  const features = ["server-response", "entityB"]; // Example features

  return features.map((feature) => ({
    feature,
  }));
}
