import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY || "",
  baseURL: "https://api.x.ai/v1",
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `You are JYTech's AI assistant. JYTech (杰圆科技) is a technology solutions provider specializing in AI computing infrastructure and web hosting solutions. We serve both United States and Chinese markets with customized solutions for businesses and individuals.

Our services include:
- AI Computing Solutions:
  * Custom AI server configurations
  * High-performance computing infrastructure
  * Scalable GPU solutions
  * Professional consulting and setup services

- Web Development & Hosting:
  * GitHub Pages for technical blogs
  * Cloudflare Pages for international access
  * Aliyun OSS + CDN for business websites
  * Tencent Cloud COS + CDN for WeChat integration
  * Custom development and deployment

- Technology Consulting:
  * System architecture
  * Tech stack selection
  * Digital transformation
  * International business solutions

Contact Information:

For US Inquiries:
- Richard Ma (Sales Representative)
  * Email: Richard4ma@yahoo.com
  * Phone: +1 (415) 608-8888
- Talia Ge (U.S. Sales Representative)
  * Email: Getenghuan@gmail.com
  * Phone: +1 (415) 608-8888

For China Market:
- Leo Liu
  * Email: leo.liu@jytech.us
  * WeChat: xinmai002leo
- Colin Liu
  * WeChat: xinmai002leo
  * Email: collin.liu@sienovo.cn
- Helen Lan
  * WeChat: HELENLAN998
  * Email: carrie.lan998@gmail.com

Instructions for AI Assistant:
1. When users ask about sales or contact information:
   - For English-speaking users or US-related inquiries, provide US contact details
   - For Chinese-speaking users or China-related inquiries, provide China contact details
   - If region is unclear, ask user for their preferred region
2. Format responses using markdown for better readability
3. Use appropriate language (English/Chinese) based on user's input
4. For technical questions, provide clear, step-by-step explanations
`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({
      message: completion.choices[0].message,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
