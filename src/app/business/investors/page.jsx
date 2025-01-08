"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Spinner,
} from "@nextui-org/react";
import useFetch from "@/hooks/useFetch";
import { useMemo, useState } from "react";

export default function InvesstorPage() {
  const { data: rsp, ifLoading, error } = useFetch({ url: "/api/investors" });

  const data = useMemo(() => rsp?.data, [rsp]);

  // return <div className="flex justify-center h-full"><Spinner/></div>;

  if (ifLoading) return <Spinner className="mx-auto" />;
  if (error) return <div>Something goes wrong, please try again later</div>;

  return Array.isArray(data) && data.length ? (
    <main className="px-6">
      <div className="mb-5">
        <Card>
          <CardBody className="p-12">
            <h2 className="text-3xl mb-3">
              Welcome to our Investor Directory!
            </h2>
            <div className="text-gray-600">
              <p className="text-xl">
                Your go-to resource for connecting with top investors in the
                startup ecosystem.
              </p>
              <p className="text-xl">
                We have meticulously curated a list of{" "}
                <strong>{data.length}</strong> investors, each bringing unique
                expertise, insights, and funding opportunities.
              </p>
              <p className="text-xl hidden sm:block">
                Our goal is to empower startups by providing access to valuable
                information that can help them grow and succeed.{" "}
              </p>
              <p className="text-xl hidden md:block">
                Whether you&apos;re seeking seed funding, venture capital, or
                strategic partnerships, our directory offers a comprehensive
                overview of potential investors who can support your
                entrepreneurial journey. Explore, connect, and take your startup
                to the next level with our investor directory.
              </p>
            </div>
            <blockquote
              style={{ marginTop: 16, color: "gray", fontSize: "small" }}
            >
              ** Join as investor you must be earn over $200K ($300K with
              spouse) yearly or have a net worth over $1M, excluding your home.
            </blockquote>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>{item}</CardHeader>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href={`https://www.google.com/search?q=${item}`}
              >
                Learn more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  ) : (
    <>{JSON.stringify(data)}</>
  );
}
