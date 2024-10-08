"use client";

import { Image } from "@nextui-org/react";
import PricingDemoProjectCards from "../../components/Cards/PricingDemoProjectCards";
import PricingServicePlanCards from "../../components/Cards/PricingServicePlanCards";

export default function PricingPage() {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "price",
      label: "Price",
    },
  ];

  const rows = [
    {
      key: 1,
      name: "Website",
      price: "$500+",
    },
    {
      key: 2,
      name: "SEO",
      price: "$300+",
    },
    {
      key: 3,
      name: "Advertizing",
      price: "$100/mo or 15% of advertizing cost, whichever larger",
    },
  ];

  return (
    <>
      <Image src="https://apptechhub.com/assets/images/Footer%20banner.png" alt="jytech pricing banner" />
      <PricingServicePlanCards />
      <PricingDemoProjectCards />
    </>
  );
}
