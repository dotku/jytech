"use client";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import { getInvestors } from "@/data/investors";
import { useTranslations, useLocale } from 'next-intl';

export default function BusinessCards() {
  const locale = useLocale();
  const t = useTranslations();
  const investors = getInvestors(locale);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {investors.map((investor) => (
        <Card
          key={investor.id}
          className="mb-3 hover:shadow-lg transition-shadow rounded-2xl overflow-hidden"
          isPressable
          as={Link}
          href={investor.link}
        >
          <Image
            src={investor.image}
            alt={t(investor.nameKey)}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <CardHeader className="pb-0 pt-4 px-6">
            <h2 className="text-xl font-bold text-gray-900">{t(investor.nameKey)}</h2>
          </CardHeader>
          <CardBody className="py-4 px-6">
            <p className="text-gray-600 text-sm leading-relaxed">{t(investor.descriptionKey)}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
