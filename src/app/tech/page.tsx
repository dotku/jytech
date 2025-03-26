"use client";

import GeneralLayout from "@/components/Layouts/GeneralLayout";
import {
  PricingDemoProjectCards,
  PricingServicePlanCards,
} from "../../components/Cards";
import { Image } from "@nextui-org/react";
import { Suspense } from "react";

export default function TechPage() {
  return (
    <GeneralLayout>
      <div className="px-6">
        <Image
          alt="jytech tech page banner"
          src="https://apptechhub.com/assets/images/bg/home1-banner.png"
        />
        <Suspense fallback={<div>Loading pricing plans...</div>}>
          <PricingServicePlanCards />
        </Suspense>
        <Suspense fallback={<div>Loading demo projects...</div>}>
          <PricingDemoProjectCards />
        </Suspense>
      </div>
    </GeneralLayout>
  );
}
