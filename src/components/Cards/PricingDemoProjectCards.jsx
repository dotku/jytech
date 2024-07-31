"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

const projectDataRows = [
  {
    key: 4,
    name: "ZYIntl",
    description:
      "Discover our online store for top-quality PPE, including gloves, masks, and test kits. We offer affordable prices, reliable protection, and exceptional customer service. Shop with confidence and prioritize your safety with our comprehensive PPE solutions.",
    cost: "$80,000",
  },
  {
    key: 3,
    name: "Qi Xing Au Pair",
    description:
      "With marketing generating over 100 leads per month, costing $6,000/year, the next step is to leverage Mailchimp to enhance the website's marketing efforts. This will entail a budget allocation of $500 specifically for creating and optimizing the website. The combination aims to boost overall marketing effectiveness and lead conversion.",
    cost: "$6,500",
    url: "https://qixing-au-pair.mailchimpsites.com/",
  },
  {
    key: 2,
    name: "Next Appointment App",
    description:
      "An appointment platform now includes comprehensive support for mobile apps, enhancing accessibility and convenience for users. This integration ensures seamless scheduling and management of appointments on the go. The mobile app coverage significantly improves user engagement and satisfaction.",
    url: "https://next-appointment-app-one.vercel.app/",
    cost: "$30,000",
  },
  {
    key: 1,
    name: "AlumAI Advisor",
    description:
      "An international study advisor program provides tailored guidance to students seeking education opportunities abroad. This program offers expert advice on selecting institutions, navigating application processes, and preparing for international study. Its goal is to ensure students make informed decisions and have a successful educational experience overseas.",
    url: "https://alumadvisors.com/",
    cost: "$100,000",
  },
];

export default function PricingDemoProjects() {
  return (
    <>
      <h3 className="text-xl py-5">Demo Projects</h3>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-4">
        {projectDataRows.map((row) => (
          <Card key={row.key}>
            <CardHeader>
              <div className="flex justify-between w-full items-center">
                <h3 className="text-xl">{row.name}</h3>
                <div className="my-2">{row.cost}</div>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="my-2">{row.description}</div>
            </CardBody>
            <Divider />
            {row.url && (
              <CardFooter className="justify-end">
                <Link isExternal showAnchorIcon href={row.url}>
                  Visit
                </Link>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}
