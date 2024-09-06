import GeneralLayout from "@/components/Layouts/GeneralLayout";

export default function PricingLayout({ children }) {
  return (
      <GeneralLayout>
        <div className="px-6">{children}</div>
      </GeneralLayout>
  );
}
