import GeneralLayout from "@/components/Layouts/GeneralLayout";

export default function PageLayout({ children }) {
  return (
    <GeneralLayout>
      <div className="px-6">{children}</div>
    </GeneralLayout>
  );
}
