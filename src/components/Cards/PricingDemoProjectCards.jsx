"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const projectDataRows = [
  {
    key: 1,
    name: "AlumAI Advisor",
    name_cn: "艾伦留学顾问AI",
    tags: ["AI", "Education"],
    description: {
      en: "An international study advisor program provides tailored guidance to students seeking education opportunities abroad. This program offers expert advice on selecting institutions, navigating application processes, and preparing for international study.",
      cn: "国际学习顾问计划为寻求海外教育机会的学生提供个性化指导。该计划提供专家建议，帮助学生选择机构、导航申请流程和为国际学习做准备。",
    },
    url: "https://alumadvisors.com/",
    cost: "$100,000",
    cost_cn: "￥720,000",
  },
  {
    key: 4,
    name: "ZYIntl",
    name_cn: "中远国际",
    tags: ["E-Commerce", "Cross-Border"],
    description: {
      en: "Online store for top-quality PPE, including gloves, masks, and test kits. Features affordable pricing, reliable protection, and exceptional customer service with comprehensive PPE solutions.",
      cn: "在线商店，提供高品质的个人防护装备（PPE），包括手套、口罩和检测试剂盒。提供实惠的价格、可靠的防护和全面的PPE解决方案。",
    },
    cost: "$80,000",
    cost_cn: "￥580,000",
  },
  {
    key: 6,
    name: "Apptechhub",
    name_cn: "应用科技中心",
    tags: ["SaaS", "IT Services"],
    description: {
      en: "A comprehensive IT service platform offering cloud solutions, web development, and digital transformation services. Integrated with advanced project management and client communication tools.",
      cn: "全方位的IT服务平台，提供云解决方案、网站开发和数字化转型服务。集成了先进的项目管理和客户沟通工具。",
    },
    cost: "$50,000",
    cost_cn: "￥360,000",
  },
  {
    key: 7,
    name: "Carku iOS App",
    name_cn: "卡酷充电宝",
    tags: ["Mobile App", "IoT"],
    description: {
      en: "Mobile shared power bank solution: scan QR code to borrow a battery and charge your phone on the go. Borrow from any nearby station and return to any station after charging.",
      cn: "移动共享电源：手机扫码可以借用电池为手机充电，简单快捷。可以从附近的任何站点借用电池，充电后归还到附近的任何站点。",
    },
    cost: "$50,000",
    cost_cn: "￥360,000",
    url: "https://apps.apple.com/us/app/carku/id1584274040",
  },
  {
    key: 5,
    name: "Dotku",
    name_cn: "点库科技",
    tags: ["Blog", "Next.js"],
    description: {
      en: "A modern tech blog and knowledge sharing platform. Features include article management, code snippets, and interactive discussions. Built with Next.js and MongoDB for optimal performance.",
      cn: "现代化的技术博客和知识分享平台。功能包括文章管理、代码片段分享和互动讨论。使用Next.js和MongoDB构建。",
    },
    cost: "$30,000",
    cost_cn: "￥220,000",
  },
  {
    key: 2,
    name: "Next Appointment App",
    name_cn: "在线预约系统",
    tags: ["Mobile App", "SaaS"],
    description: {
      en: "An appointment platform with comprehensive mobile app support, enhancing accessibility and convenience. Seamless scheduling and management of appointments on the go.",
      cn: "预约平台包括对移动应用程序的全面支持，提高了用户的可访问性和便利性。确保了预约的无缝安排和管理。",
    },
    url: "https://next-appointment-app-one.vercel.app/",
    cost: "$30,000",
    cost_cn: "￥220,000",
  },
  {
    key: 3,
    name: "Qi Xing Au Pair",
    name_cn: "启星互惠生",
    tags: ["WeChat", "Cross-Border"],
    description: {
      en: "A comprehensive digital solution for an international au pair service, featuring a responsive website and WeChat mini-program. Includes profiles, family matching, and online applications. Increased user engagement by 150%.",
      cn: "为国际互惠生服务开发的全方位数字解决方案，包括响应式网站和微信小程序。包含档案、家庭匹配和在线申请功能。帮助提升用户参与度150%。",
    },
    cost: "$25,000",
    cost_cn: "￥180,000",
    url: "https://qixing-au-pair.mailchimpsites.com/",
  },
];

function PricingDemoProjectCardsContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region")?.toLowerCase() || "us";
  const lang = region === "cn" ? "cn" : "en";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectDataRows.map((row) => (
        <Card
          key={row.key}
          className="shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="pb-2">
            <div className="w-full">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-900">
                  {lang === "cn" ? row.name_cn : row.name}
                </h3>
                <span className="text-lg font-bold text-emerald-600 whitespace-nowrap ml-2">
                  {lang === "cn" ? row.cost_cn : row.cost}
                </span>
              </div>
              {row.tags && (
                <div className="flex gap-1.5 mt-2">
                  {row.tags.map((tag) => (
                    <Chip key={tag} size="sm" variant="flat" color="default">
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="py-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              {row.description[lang]}
            </p>
          </CardBody>
          {row.url && (
            <>
              <Divider />
              <CardFooter className="justify-end py-2">
                <Link
                  isExternal
                  showAnchorIcon
                  href={row.url}
                  className="text-blue-600 text-sm"
                >
                  {lang === "cn" ? "访问网站" : "Visit website"}
                </Link>
              </CardFooter>
            </>
          )}
        </Card>
      ))}
    </div>
  );
}

export default function PricingDemoProjectCards() {
  return (
    <Suspense fallback={<div>Loading case studies...</div>}>
      <PricingDemoProjectCardsContent />
    </Suspense>
  );
}
