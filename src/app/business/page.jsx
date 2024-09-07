"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import useBusinessData from "./useBusinessData";
import Markdown from "react-markdown";
import { ReactMarkdownWrapper } from "@/components/Cards/PricingServicePlanCards";

export default function BusinessPage() {
  const { data } = useBusinessData();

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="mt-3">
        <Image
          alt="business center"
          src="/assets/images/business/jytech-global-business-banner.png"
          className="rounded-none"
        />
        <CardFooter className="flex-col bg-white/90 border-white/20 overflow-hidden h-full w-full justify-center md:h-auto shadow-small z-10">
          <h2 className="text-2xl md:text-3xl mb-3 w-full">
            Welcome to JYTech Business Center!
          </h2>
          <div className="text-gray-600 w-full">
            <p className="text-base md:text-xl">
              We help global business grow, we connected with golbal 1,000+
              organization and partners, and successful handle over 100 cases
              per year.
            </p>
          </div>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        {data.map(({ name, summary, url }, idx) => (
          <Card key={idx}>
            <CardHeader className="font-bold pt-6 px-6">{name}</CardHeader>
            <CardBody className="px-6">
              <ReactMarkdownWrapper>
                <Markdown>{summary}</Markdown>
              </ReactMarkdownWrapper>
            </CardBody>
            <CardFooter className="justify-end px-6">
              <Link
                isExternal={!url}
                showAnchorIcon={!url}
                href={url ? url : `https://www.google.com/search?q=${name}`}
              >
                Learn more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
