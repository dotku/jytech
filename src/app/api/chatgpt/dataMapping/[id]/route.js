import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(_request, { params }) {
  const { id } = params;

  // Check if the ID is the placeholder and handle accordingly
  if (id === "placeholder-id") {
    return NextResponse.json({ message: "This is a placeholder" });
  }

  let json;

  try {
    json = await fetch(`http://localhost:3000/api/chatgpt/share/${id}`).then(
      (rsp) => rsp.json()
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: `Error fetching data: ${error.message}` },
      { status: 500 }
    );
  }

  console.log("json", json);

  if (json) {
    console.log("json", json);
    return new Response(
      JSON.stringify(json.props.pageProps.serverResponse.data.mapping),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    console.log('Script with id "__NEXT_DATA__" not found.');
    return NextResponse.json({ message: "Script not found" });
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
