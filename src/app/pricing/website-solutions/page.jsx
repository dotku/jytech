"use client";
import {
  solutions,
  addOnServices,
  usContacts,
  chinaContacts,
} from "@/data/products";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PricingDemoProjectCards from "@/components/Cards/PricingDemoProjectCards";
import { Suspense } from "react";

function WebsiteSolutionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentRegion, setCurrentRegion] = useState("us");

  useEffect(() => {
    const region = searchParams.get("region")?.toLowerCase();
    if (region && ["cn", "us"].includes(region)) {
      setCurrentRegion(region);
    }
  }, [searchParams]);

  const contacts = currentRegion === "cn" ? chinaContacts : usContacts;
  const solutionsForRegion = solutions.filter(
    (s) => s.region === currentRegion
  );
  const servicesForRegion = addOnServices.filter(
    (s) => s.region === currentRegion
  );

  const switchRegion = (newRegion) => {
    const url = new URL(window.location.href);
    url.searchParams.set("region", newRegion);
    router.push(url.pathname + url.search);
  };

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {currentRegion === "cn"
              ? "AI 赋能解决方案"
              : "AI-Powered Solutions"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {currentRegion === "cn"
              ? "根据您的业务场景，提供 AI 驱动的一站式解决方案"
              : "AI-driven end-to-end solutions tailored to your business scenario"}
          </p>

          {/* Region Selector */}
          <div className="mt-6 inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => switchRegion("us")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                currentRegion === "us"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              U.S. Region
            </button>
            <button
              type="button"
              onClick={() => switchRegion("cn")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                currentRegion === "cn"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              中国区
            </button>
          </div>
        </div>

        {/* Solutions Table */}
        <div className="mt-8 sm:mt-16">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "场景" : "Scenario"}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "方案" : "Solution"}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "亮点" : "Highlights"}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "价格" : "Price"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {solutionsForRegion.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                      {item.scenario}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-900">
                      {item.solution}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {item.highlights.join(" / ")}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            {currentRegion === "cn"
              ? "以上为基础报价，具体项目请联系我们的销售团队获取详细方案"
              : "Prices listed are starting points. Contact our sales team for a detailed quote."}
          </p>
        </div>

        {/* Add-On Services Section */}
        <div className="mt-12 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 text-center mb-4 sm:mb-8">
            {currentRegion === "cn" ? "增值服务" : "Add-On Services"}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "服务" : "Service"}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "价格" : "Price"}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === "cn" ? "说明" : "Description"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {servicesForRegion.map((service) => (
                  <tr key={service.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                      {service.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900">
                      {service.price}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {service.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Demo Projects Section */}
        <div className="mt-12 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 text-center mb-4 sm:mb-8">
            {currentRegion === "cn" ? "成功案例" : "Case Studies"}
          </h3>
          <Suspense fallback={<div>Loading demo projects...</div>}>
            <PricingDemoProjectCards />
          </Suspense>
        </div>

        {/* Sales Contact Section */}
        <div className="mt-12 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 text-center mb-4 sm:mb-8">
            {currentRegion === "cn" ? "中国区销售" : "U.S. Sales Contact"}
          </h3>
          <div className="max-w-lg mx-auto sm:px-0">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="rounded-lg bg-gray-50 p-4 my-4 sm:p-6"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {contact.name}
                </h4>
                <p className="mt-2 text-gray-600">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  {contact.wechat && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">
                        WeChat:
                      </dt>
                      <dd className="text-gray-900">{contact.wechat}</dd>
                    </div>
                  )}
                  {contact.email && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">
                        Email:
                      </dt>
                      <dd className="text-gray-900">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">
                        Phone:
                      </dt>
                      <dd className="text-gray-900">
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {contact.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteSolutionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebsiteSolutionsContent />
    </Suspense>
  );
}
