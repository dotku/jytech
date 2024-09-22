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
    <div className="max-w-7xl mx-auto">
      <Card className="mt-3">
        <Image
          alt="business center"
          src="/assets/images/business/jytech-global-business-banner-transparent.png"
          className="rounded-none"
        />
        <CardFooter className="flex-col bg-white/90 border-white/20 overflow-hidden h-full w-full justify-center md:h-auto shadow-small p-6">
          <h2 className="text-2xl md:text-3xl mb-3 w-full">
            Welcome to the Global Business Center!
          </h2>
          <div className="text-gray-600 w-full">
            <p className="text-base">
              Empowering Global Business Growth! With strategic connections to
              over 1,000 leading organizations and partners worldwide, we manage
              and deliver exceptional results on more than 100 cases annually.
              Our expertise and expansive network enable us to drive sustainable
              success for businesses on a global scale.
            </p>
          </div>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {data.map(({ name, summary, url }, idx) => (
          <Card key={idx}>
            <CardHeader className="font-bold pt-6 px-6 text-2xl">
              {name}
            </CardHeader>
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
      <div className="mt-3">
        <Card>
          <CardHeader className="font-bold pt-6 px-6 text-2xl">
            Unlock New Business Opportunities
          </CardHeader>
          <CardBody className="px-6">
            <ReactMarkdownWrapper>
              <Markdown>
                we believe that innovation and collaboration are key to
                unlocking new potential. Whether you’re an entrepreneur looking
                for a fresh partnership or a seasoned business professional
                seeking to expand your portfolio, we offer a wide range of
                opportunities to help you grow and succeed.
              </Markdown>
            </ReactMarkdownWrapper>
          </CardBody>
          <CardFooter className="justify-end px-6">
            <Link href="/business/oppotunities">Learn more</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
