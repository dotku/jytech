"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@heroui/react";
import ReactMarkdown from "react-markdown";
import PricingServicePlanCardsData from "./PricingServicePlanCardsData";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";

export function ReactMarkdownWrapper({ children }) {
  return <div className="markdown-wrapper">{children}</div>;
}

const cardAccents = [
  "border-t-4 border-t-blue-600",
  "border-t-4 border-t-emerald-600",
  "border-t-4 border-t-amber-600",
  "border-t-4 border-t-purple-600",
  "border-t-4 border-t-red-600",
];

function PricingServicePlansContent() {
  const locale = useLocale();
  const t = useTranslations("pricing.websiteSolutions");
  const lang = locale === "zh" ? "zh" : "en";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PricingServicePlanCardsData.map((row, index) => (
        <Card
          key={row.key}
          className={`shadow-md hover:shadow-lg transition-shadow ${cardAccents[index] || ""}`}
        >
          <CardHeader className="pb-2">
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900">{row.name[lang]}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                {row.price[lang]}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="py-3">
            <div className="text-sm">
              <ReactMarkdownWrapper>
                <ReactMarkdown>{row.description[lang]}</ReactMarkdown>
              </ReactMarkdownWrapper>
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="justify-center py-3">
            {row.externalUrl ? (
              <Link href={row.externalUrl} isExternal className="w-full">
                <Button color="primary" className="w-full">
                  {row.buttonText[lang]}
                </Button>
              </Link>
            ) : row.key === 1 ? (
              <Link href={`/${locale}/pricing/website-solutions`} className="w-full">
                <Button color="primary" className="w-full">
                  {row.buttonText[lang]}
                </Button>
              </Link>
            ) : (
              <Link
                href="mailto:weijingjaylin+jytech@gmail.com"
                className="w-full"
              >
                <Button color="primary" variant="bordered" className="w-full">
                  {row.buttonText[lang]}
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
