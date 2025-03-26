import GeneralLayout from "@/components/Layouts/GeneralLayout";
import {
  PricingDemoProjectCards,
  PricingServicePlanCards,
} from "../../components/Cards";
import { Image } from "@nextui-org/react";
import { Suspense } from "react";

// Mark the page as a Server Component
export default async function TechPage() {
  return (
    <GeneralLayout>
      <Image
        alt="jytech tech page banner"
        src="https://apptechhub.com/assets/images/bg/home1-banner.png"
        className="w-full rounded-lg shadow-lg mb-8"
      />
      <Suspense fallback={<div>Loading pricing plans...</div>}>
        <PricingServicePlanCards />
      </Suspense>
      <Suspense fallback={<div>Loading demo projects...</div>}>
        <PricingDemoProjectCards />
      </Suspense>
    </GeneralLayout>
  );
}
