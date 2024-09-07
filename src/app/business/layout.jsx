import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GeneralLayout from "@/components/Layouts/GeneralLayout";

export default function BusinessLayout({ children }) {
  return (
    <GeneralLayout>
      <div className="px-6">{children}</div>
    </GeneralLayout>
  );
}
