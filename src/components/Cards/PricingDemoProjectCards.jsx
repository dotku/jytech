"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

const projectDataRows = [
  {
    key: 3,
    name: "Qi Xing Au Pair",
    name_cn: "启星互惠生",
    description: {
      en: "A comprehensive digital solution for an international au pair service, featuring a responsive website and WeChat mini-program. The platform includes au pair profiles, family matching, online applications, and integrated marketing tools. Our solution helped increase user engagement by 150% and streamlined the application process.",
      cn: "为国际互惠生服务开发的全方位数字解决方案，包括响应式网站和微信小程序。平台功能包括互惠生档案、家庭匹配、在线申请和整合营销工具。我们的解决方案帮助提升用户参与度150%，简化了申请流程。",
    },
    cost: "$25,000",
    cost_cn: "￥180,000",
    url: "https://qixing-au-pair.mailchimpsites.com/",
  },
  {
    key: 4,
    name: "ZYIntl",
    name_cn: "中远国际",
    description: {
      en: "Discover our online store for top-quality PPE, including gloves, masks, and test kits. We offer affordable prices, reliable protection, and exceptional customer service. Shop with confidence and prioritize your safety with our comprehensive PPE solutions.",
      cn: "探索我们的在线商店，提供高品质的个人防护装备（PPE），包括手套、口罩和检测试剂盒。我们提供实惠的价格、可靠的防护和卓越的客户服务。放心选购，让我们全面的PPE解决方案为您的安全保驾护航。",
    },
    cost: "$80,000",
    cost_cn: "￥580,000",
  },
  {
    key: 5,
    name: "Dotku",
    name_cn: "点库科技",
    description: {
      en: "A modern tech blog and knowledge sharing platform. Features include article management, code snippets, and interactive discussions. Built with Next.js and MongoDB for optimal performance.",
      cn: "现代化的技术博客和知识分享平台。功能包括文章管理、代码片段分享和互动讨论。使用Next.js和MongoDB构建，确保最佳性能。",
    },
    cost: "$30,000",
    cost_cn: "￥220,000",
  },
  {
    key: 6,
    name: "Apptechhub",
    name_cn: "应用科技中心",
    description: {
      en: "A comprehensive IT service platform offering cloud solutions, web development, and digital transformation services. Integrated with advanced project management and client communication tools.",
      cn: "全方位的IT服务平台，提供云解决方案、网站开发和数字化转型服务。集成了先进的项目管理和客户沟通工具。",
    },
    cost: "$50,000",
    cost_cn: "￥360,000",
  },
  {
    key: 2,
    name: "Next Appointment App",
    name_cn: "在线预约系统",
    description: {
      en: "An appointment platform now includes comprehensive support for mobile apps, enhancing accessibility and convenience for users. This integration ensures seamless scheduling and management of appointments on the go. The mobile app coverage significantly improves user engagement and satisfaction.",
      cn: "预约平台现在包括对移动应用程序的全面支持，提高了用户的可访问性和便利性。这种集成确保了预约的无缝安排和管理。移动应用程序覆盖范围显著提高了用户参与度和满意度。",
    },
    url: "https://next-appointment-app-one.vercel.app/",
    cost: "$30,000",
    cost_cn: "￥220,000",
  },
  {
    key: 1,
    name: "AlumAI Advisor",
    name_cn: "艾伦留学顾问AI",
    description: {
      en: "An international study advisor program provides tailored guidance to students seeking education opportunities abroad. This program offers expert advice on selecting institutions, navigating application processes, and preparing for international study. Its goal is to ensure students make informed decisions and have a successful educational experience overseas.",
      cn: "国际学习顾问计划为寻求海外教育机会的学生提供个性化指导。该计划提供专家建议，帮助学生选择机构、导航申请流程和为国际学习做准备。其目标是确保学生做出明智的决定并拥有成功的海外教育经历。",
    },
    url: "https://alumadvisors.com/",
    cost: "$100,000",
    cost_cn: "￥720,000",
  },
  {
    key: 7,
    name: "Carku iOS App",
    name_cn: "卡酷充电宝",
    description: {
      en: "Mobile shared power: mobile phone scan code can borrow the battery to charge the phone, simple and quick.Don't be afraid to run out of battery when you go out. Mobile shared power: When your mobile phone is low in power when you are out and about, you can borrow the battery from any nearby station and return it to any nearby station after charging the mobile phone.",
      cn: "移动共享电源：手机扫码可以借用电池为手机充电，简单快捷。外出时不必担心手机没电。移动共享电源：当您外出时手机电量低时，可以从附近的任何站点借用电池，并在为手机充电后将其归还到附近的任何站点。",
    },
    cost: "$50,000",
    cost_cn: "￥360,000",
    url: "https://apps.apple.com/us/app/carku/id1584274040",
  },
];

function PricingDemoProjectCardsContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region")?.toLowerCase() || "us";
  const lang = region === "cn" ? "cn" : "en";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectDataRows.map((row) => (
        <Card key={row.key} className="p-4">
          <CardHeader>
            <div className="flex justify-between w-full items-center">
              <h3 className="text-xl">
                {lang === "cn" ? row.name_cn : row.name}
              </h3>
              <div className="my-2">{lang === "cn" ? row.cost_cn : row.cost}</div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-600">{row.description[lang]}</p>
          </CardBody>
          {row.url && (
            <>
              <Divider />
              <CardFooter className="justify-end">
                <Link
                  isExternal
                  showAnchorIcon
                  href={row.url}
                  className="text-blue-600"
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
    <Suspense fallback={<div>Loading demo projects...</div>}>
      <PricingDemoProjectCardsContent />
    </Suspense>
  );
}
