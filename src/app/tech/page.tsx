import GeneralLayout from "@/components/Layouts/GeneralLayout";
import {
  PricingDemoProjectCards,
  PricingServicePlanCards,
} from "../../components/Cards";
import { Image } from "@nextui-org/react";

export default function TechPage() {
  return (
    <GeneralLayout>
      <div className="px-6">
        <Image
          alt="jytech tech page banner"
          src="https://apptechhub.com/assets/images/bg/home1-banner.png"
        />
        <PricingServicePlanCards />
        <PricingDemoProjectCards />
      </div>
    </GeneralLayout>
  );
}
