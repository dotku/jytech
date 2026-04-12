"use client";
import { solutions, addOnServices, chinaContacts } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";

export default function CNHostingPage() {
  const locale = useLocale();
  const t = useTranslations("pricing.websiteSolutions");
  const cnSolutions = solutions.filter((s) => s.region === "cn");
  const cnServices = addOnServices.filter((s) => s.region === "cn");

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <a
              href={`/${locale}/pricing/website-solutions/us`}
              className="text-blue-600 hover:text-blue-800"
            >
              {t("switchToUS")}
            </a>
          </p>
        </div>

        {/* Solutions Table */}
        <div className="mt-16 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  {t("scenario")}
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  {t("solution")}
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  {t("highlights")}
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  {t("price")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {cnSolutions.map((item) => (
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

        {/* Add-On Services Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {t("addOnServices")}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t("service")}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t("price")}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {t("description")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {cnServices.map((service) => (
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

        {/* China Sales Contact Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {t("cnSalesContact")}
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {chinaContacts.map((contact) => (
              <div key={contact.id} className="rounded-lg bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {contact.name}
                </h4>
                <p className="mt-2 text-gray-600">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex">
                    <dt className="w-20 flex-shrink-0 text-gray-500">
                      {t("wechat")}:
                    </dt>
                    <dd className="text-gray-900">{contact.wechat}</dd>
                  </div>
                  {contact.email && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">
                        {t("email")}:
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
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
