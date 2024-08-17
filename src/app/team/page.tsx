"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Spinner,
} from "@nextui-org/react";
import useFetch from "../../hooks/useFetch";
import { useMemo, useState } from "react";
import CEOImage from "./8031723872470_.pic.jpg";

export default function InvesstorPage() {
  return (
    <main className="px-6 h-full">
      <div className="mb-5">
        <h2 className="text-3xl mb-3 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="flex justify-center py-6">
              <Image
                src="/assets/images/8031723872470_.pic.jpg"
                alt="ken wang"
                className="max-h-[320px] max-w-[320px] rounded-full h-[320px]"
              />
            </div>
            <CardHeader className="text-xl text-center pb-0">
              Ken Wang, CEO
            </CardHeader>
            <CardBody>
              Previous known as the founder of AngelVC (Tianfeng Search), a
              visionary entrepreneur known for his pioneering work in venture
              capital.
            </CardBody>
          </Card>
          <Card>
            <div className="flex justify-center py-6">
              <Image
                src="https://media.licdn.com/dms/image/C5603AQElHUzY0-SMAQ/profile-displayphoto-shrink_800_800/0/1560535607076?e=1729123200&v=beta&t=Rma0X3apvIf9Ol4bG9PbWc0WbqIKAZUFN796ZsMXEu0"
                alt="Jay Lin"
                className="rounded-full max-h-[320px] max-w-[320px] h-[320px]"
              />
            </div>
            <CardHeader className="text-xl text-center pb-0">
              Jay Lin, CTO
            </CardHeader>
            <CardBody>
              Jay Lin is a highly experienced software engineering leader with
              over years of experience across various industries, including
              e-commerce, finance, media, and robotics, by delivering
              cutting-edge solutions.
            </CardBody>
          </Card>
          <Card>
            <div className="flex justify-center py-6">
              <Image
                src="/assets/images/peter_yau.png"
                alt="Peter Yau"
                className="rounded-full max-h-[320px] max-w-[320px] h-[320px]"
              />
            </div>
            <CardHeader className="text-xl text-center pb-0">
              Peter Yau, CBDO
            </CardHeader>
            <CardBody>
              Peter Yau is the Chief Business Development Officer (CBDO)
              overseeing global operations across key markets, including China,
              the US, Canada, and Brazil with a strategic focus on driving
              business growth and forging international partnerships.
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
