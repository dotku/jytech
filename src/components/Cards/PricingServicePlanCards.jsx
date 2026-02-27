"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import PricingServicePlanCardsData from "./PricingServicePlanCardsData";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const ReactMarkdownWrapper = styled.div`
  ul {
    margin: 0.75rem auto;
    list-style-type: disc;
    padding-left: 24px;
  }
  li {
    margin: 4px 0;
    line-height: 1.5;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    margin: 0.75rem 0 0.25rem;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
  }
  p {
    margin: 6px 0;
    color: #374151;
  }
`;

const cardAccents = [
  "border-t-4 border-t-blue-600",
  "border-t-4 border-t-emerald-600",
  "border-t-4 border-t-amber-600",
  "border-t-4 border-t-purple-600",
];

function PricingServicePlansContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "us";
  const lang = region === "cn" ? "cn" : "us";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {PricingServicePlanCardsData.map((row, index) => (
        <Card
          key={row.key}
          className={`shadow-md hover:shadow-lg transition-shadow ${cardAccents[index] || ""}`}
        >
          <CardHeader className="pb-2">
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900">{row.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                {row.price}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="py-3">
            <div className="text-sm">
              <ReactMarkdownWrapper>
                <ReactMarkdown>{row.description}</ReactMarkdown>
              </ReactMarkdownWrapper>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="justify-center py-3">
            {row.key === 1 ? (
              <Link href="/pricing/website-solutions" className="w-full">
                <Button color="primary" className="w-full">
                  {row.buttonText?.[lang] || "More"}
                </Button>
              </Link>
            ) : (
              <Link
                href="mailto:weijingjaylin+jytech@gmail.com"
                className="w-full"
              >
                <Button color="primary" variant="bordered" className="w-full">
                  {row.buttonText?.[lang] || "Contact"}
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function PricingServicePlans() {
  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <PricingServicePlansContent />
    </Suspense>
  );
}
