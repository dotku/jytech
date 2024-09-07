import GeneralLayout from "@/components/Layouts/GeneralLayout";

export const metadata = {
  title: "Global Business Center | JYTech",
  description:
    "Empowering Global Business Growth! With strategic connections to over 1,000 leading organizations and partners worldwide, we manage and deliver exceptional results on more than 100 cases annually. Our expertise and expansive network enable us to drive sustainable success for businesses on a global scale.",
};

export default function BusinessLayout({ children }) {
  return (
    <GeneralLayout>
      <div className="px-6">{children}</div>
    </GeneralLayout>
  );
}
