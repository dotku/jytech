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

const ReactMarkdownWrapper = styled.div`
  ul {
    list-style-type: disc;
    padding-left: 40px;
  }
  h2 {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

export default function PricingServicePlans() {
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
              <Link href="mailto:weijingjaylin+jytech@gmail.com">
                <Button color="primary">Contact</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
