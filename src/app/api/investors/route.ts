import { NextResponse } from "next/server";

export async function GET() {
  const investors = {
    data: [
      {
        id: 1,
        name: "Technology",
        description: "We provide tech solutions covering international business including AI, IoT, FinTech, EdTech and etc.",
        image: "https://media.licdn.com/dms/image/D4D12AQH0VKGGvIkQag/article-cover_image-shrink_720_1280/0/1697706837353",
        link: "/tech"
      },
      {
        id: 2,
        name: "Marketing",
        description: "We help businesses grow through digital marketing, branding, and customer engagement strategies.",
        image: "https://dotku.us/marketing/assets/images/bg/home1-banner.png",
        link: "https://dotku.us/marketing/"
      },
      {
        id: 3,
        name: "Business Travel",
        description: "Comprehensive travel solutions for business professionals, ensuring comfort and efficiency.",
        image: "https://dotku.us/assets/images/bg/home1-banner.png",
        link: "/business/travel"
      },
      {
        id: 4,
        name: "Consulting",
        description: "Expert guidance and solutions for your business challenges and growth opportunities.",
        image: "https://dotku.us/assets/images/bg/home1-banner.png",
        link: "/tech/consultant"
      }
    ]
  };

  return NextResponse.json(investors);
}
