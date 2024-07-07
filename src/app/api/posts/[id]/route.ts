import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Fetch data based on the dynamic id. Replace this with your data fetching logic.
  const post = await fetchPostById(id);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

// Mock function to simulate fetching post by id. Replace this with your actual data fetching logic.
async function fetchPostById(id: string) {
  const posts = [
    { id: "1", title: "Post 1", content: "Content of post 1" },
    { id: "2", title: "Post 2", content: "Content of post 2" },
  ];

  return posts.find((post) => post.id === id) || null;
}
