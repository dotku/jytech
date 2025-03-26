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
import PricingServicePlandCardsData from "./PricingServicePlanCardsData";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

export const ReactMarkdownWrapper = styled.div`
  ul {
    margin: 1rem auto;
    list-style-type: disc;
    padding-left: 40px;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    margin: 1rem 0;
    font-weight: bold;
  }
  p {
    margin: 8px 0;
  }
  p strong {
    margin: 16px 0;
  }
`;

function PricingServicePlansContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get('region') || 'us';
  const lang = region === 'cn' ? 'cn' : 'us';

  return (
    <>
      <h3 className="text-xl py-5">Pricing</h3>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-4">
        {PricingServicePlandCardsData.map((row) => (
          <Card key={row.key}>
            <CardHeader>
              <div className="flex justify-between w-full items-center">
                <h3 className="text-xl">{row.name}</h3>
                <div className="my-2">{row.price}</div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="m-2">
                <ReactMarkdownWrapper>
                  <ReactMarkdown>{row.description}</ReactMarkdown>
                </ReactMarkdownWrapper>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="justify-center">
              {row.key === 1 ? (
                <Link href="/pricing/website-solutions">
                  <Button color="primary">
                    {row.buttonText?.[lang] || "More"}
                  </Button>
                </Link>
              ) : (
                <Link href="mailto:weijingjaylin+jytech@gmail.com">
                  <Button color="primary">
                    {row.buttonText?.[lang] || "Contact"}
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default function PricingServicePlans() {
  return (
    <Suspense fallback={<div>Loading pricing plans...</div>}>
      <PricingServicePlansContent />
    </Suspense>
  );
}
