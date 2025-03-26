"use client";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import { investors } from "@/data/investors";

export default function BusinessCards() {
  return (
    <div className="md:grid md:grid-cols-4 gap-6">
      {investors.map((investor) => (
        <Card key={investor.id} className="mb-3">
          <Link href={investor.link}>
            <div
              className="w-full aspect-[16/9] relative"
              style={{ height: "150px" }}
            >
              <Image
                src={investor.image}
                alt={investor.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <CardHeader className="pb-0 px-6">
            <h2 className="text-2xl">{investor.name}</h2>
          </CardHeader>
          <CardBody className="pt-0 text-gray-500 px-6 pb-6">
            {investor.description}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
