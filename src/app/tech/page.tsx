import GeneralLayout from "@/components/Layouts/GeneralLayout";
import {
  PricingDemoProjectCards,
  PricingServicePlanCards,
} from "../../components/Cards";
import { Image } from "@nextui-org/react";

export default function TechPage() {
  return (
    <GeneralLayout>
        <Image alt="tech banner" src="https://apptechhub.com/assets/images/bg/home1-banner.png" />
        <PricingServicePlanCards />
        <PricingDemoProjectCards />
    </GeneralLayout>
  );
}
