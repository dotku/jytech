"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Spinner,
} from "@nextui-org/react";
import useFetch from "../../hooks/useFetch";
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
        <p>
          Welcome to our Investor Directory, your go-to resource for connecting
          with top investors in the startup ecosystem. We have meticulously
          curated a list of <strong>{data.length}</strong> investors, each
          bringing unique expertise, insights, and funding opportunities. Our
          goal is to empower startups by providing access to valuable
          information that can help them grow and succeed. Whether you&apos;re
          seeking seed funding, venture capital, or strategic partnerships, our
          directory offers a comprehensive overview of potential investors who
          can support your entrepreneurial journey. Explore, connect, and take
          your startup to the next level with our investor directory.
        </p>
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
