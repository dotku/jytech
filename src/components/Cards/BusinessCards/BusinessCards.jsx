"use client";

import useFetch from "@/hooks/useFetch";
import { Card, CardBody, CardHeader, Link, Spinner } from "@nextui-org/react";
import { useMemo } from "react";
import SkeletonCard from "../SkeletonCard";

export default function BusinessCards() {
  const { data: investorsRsp, ifLoading } = useFetch({ url: "/api/investors" });

  const investors = useMemo(() => investorsRsp?.data, [investorsRsp]);

  if (ifLoading)
    return (
      <div className="md:grid md:grid-cols-4 gap-6 justify-between min-h-80">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );

  return (
    <div className="md:grid md:grid-cols-4 gap-6">
      <Card className="mb-3">
        <Link href="/tech">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4D12AQH0VKGGvIkQag/article-cover_image-shrink_720_1280/0/1697706837353?e=2147483647&v=beta&t=Bj6BY9Mkqjc_pqMqDXBuNrdmtNXyY5xKy2k-jqCc0nM"
              alt="media"
              className="object-cover"
            />
          </div>
        </Link>
        <CardHeader className="pb-0 px-6">
          <h2 className="text-2xl">Technology</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500 px-6 pb-6">
          We provide tech solution to covers interanational business including
          AI, IoT, FinTech, EdTech and ect.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="https://dotku.us/marketing/">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://themediaonline.co.za/wp-content/uploads/2023/11/Kantar-MTP-24-hero-square-1.png"
              alt="media"
              className="min-h-[150px]"
            />
          </div>
        </Link>
        <CardHeader className="pb-0 px-6">
          <h2 className="text-2xl">Media</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500 px-6 pb-6">
          Leveraging advanced analytics and creative strategies, we help brands
          tell their stories effectively, ensuring maximum reach and engagement
          across various digital platforms.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="https://dkwholesale.us/">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
              alt="media"
              className="object-cover"
            />
          </div>
        </Link>
        <CardHeader className="pb-0 px-6">
          <h2 className="text-2xl">E-commerce</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500 px-6 pb-6">
          We provide robust, user-friendly e-commerce solutions that streamline
          the buying process, enhance user experience, and boost online sales.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="/business">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3"
              alt="future business collaboration"
              className="object-cover"
            />
          </div>
        </Link>
        <CardHeader className="pb-0 px-6">
          <h2 className="text-2xl">Business</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500 block px-6 pb-6">
          We help global businesses grow by connecting with over 1,000
          organizations and partners worldwide, successfully handling more than
          100 cases each year.
        </CardBody>
      </Card>
    </div>
  );
}
