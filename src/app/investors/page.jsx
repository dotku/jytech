"use client";

import { Card, CardBody, CardFooter, CardHeader, Link, Spinner } from "@nextui-org/react";
import useFetch from "../../hooks/useFetch";
import { useMemo, useState } from "react";

export default function InvesstorPage() {
  const { data: rsp, ifLoading, error } = useFetch({ url: "/api/investors" });

  const data = useMemo(() => rsp?.data, [rsp]);

  // return <div className="flex justify-center h-full"><Spinner/></div>;

  if (ifLoading) return <Spinner className="mx-auto"/>;
  if (error) return <div>Something goes wrong, please try again later</div>;

  return Array.isArray(data) && data.length ? (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>{item}</CardHeader>
          <CardFooter>
            <Link isExternal showAnchorIcon href={`https://www.google.com/search?q=${item}`}>
              Learn more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  ) : (
    <>{JSON.stringify(data)}</>
  );
}
