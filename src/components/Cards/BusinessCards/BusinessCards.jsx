"use client";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import { investors } from "@/data/investors";

export default function BusinessCards() {
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
            alt={investor.name}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <CardHeader className="pb-0 pt-4 px-6">
            <h2 className="text-xl font-bold text-gray-900">{investor.name}</h2>
          </CardHeader>
          <CardBody className="py-4 px-6">
            <p className="text-gray-600 text-sm leading-relaxed">{investor.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
