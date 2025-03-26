"use client";

import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { investors } from "@/data/investors";
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";

export default function InvestorsPage() {
  return (
    <GeneralLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative h-full z-10 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Business
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                  We help global businesses grow by connecting with over 1,000 organizations 
                  and partners worldwide, successfully handling more than 100 cases each year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Investors Grid */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investors.map((investor) => (
              <Card
                key={investor.id}
                className="hover:shadow-lg transition-shadow bg-white"
                isPressable
                as={Link}
                href={investor.link}
              >
                <div className="relative h-48">
                  <Image
                    src={investor.image}
                    alt={investor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-0 pt-4 px-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{investor.name}</h2>
                </CardHeader>
                <CardBody className="py-4 px-6">
                  <p className="text-gray-600">{investor.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </GeneralLayout>
  );
}
