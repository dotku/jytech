"use client"

import useFetch from "@/hooks/useFetch";
import { Card, CardBody, CardHeader, Link, Spinner } from "@nextui-org/react";
import { useMemo } from "react";
import SkeletonCard from "../SkeletonCard";

export default function BusinessCards() {
  const { data: investorsRsp, ifLoading } = useFetch({ url: "/api/investors" });

  const investors = useMemo(() => investorsRsp?.data, [investorsRsp]);

  if (ifLoading)
    return (
      <div className="md:grid md:grid-cols-4 gap-6 justify-between  h-80">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  return (
    <div className="md:grid md:grid-cols-4 gap-6">
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
        <CardHeader className="pb-0">
          <h2 className="text-2xl">Media Service</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500">
          Leveraging advanced analytics and creative strategies, we help brands
          tell their stories effectively, ensuring maximum reach and engagement
          across various digital platforms.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="https://dotku.us/tech/">
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
        <CardHeader className="pb-0">
          <h2 className="text-2xl">Tech Service</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500">
          We provide tech solution to covers interanational business including
          AI, IoT, FinTech, EdTech and ect.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="https://dkwholesale.us/">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*U_bLFV3vJBTVOELC"
              alt="media"
              className="object-cover"
            />
          </div>
        </Link>
        <CardHeader className="pb-0">
          <h2 className="text-2xl">E-commerce</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500">
          We provide robust, user-friendly e-commerce solutions that streamline
          the buying process, enhance user experience, and boost online sales.
        </CardBody>
      </Card>
      <Card className="mb-3">
        <Link isExternal href="investors">
          <div
            className="w-full aspect-[16/9]"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            <img
              src="https://cdn.thrivent.com/dims4/default/4e2c142/2147483647/strip/true/crop/8660x5773+0+0/resize/1036x691!/quality/90/?url=http%3A%2F%2Fthrivent-brightspot.s3.amazonaws.com%2F45%2F66%2F6ca61ef44eb5b70dbb0a9a8e1d7b%2F4.12.42_What%20to%20invest%20in%20during%20a%20recession.jpg"
              alt="media"
              className="object-cover"
            />
          </div>
        </Link>
        <CardHeader className="pb-0">
          <h2 className="text-2xl">Investment</h2>
        </CardHeader>
        <CardBody className="pt-0 text-gray-500 block">
          We connect global <strong>{investors.length}</strong> investors with
          innovative entrepreneurs, offering financial resources and support.
        </CardBody>
      </Card>
    </div>
  );
}
