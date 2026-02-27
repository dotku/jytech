"use client";
import { solutions, addOnServices, usContacts } from "@/data/products";

export default function USHostingPage() {
  const usSolutions = solutions.filter((s) => s.region === "us");
  const usServices = addOnServices.filter((s) => s.region === "us");

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI-Powered Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            AI-driven end-to-end solutions tailored to your business scenario
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <a
              href="/pricing/cn"
              className="text-blue-600 hover:text-blue-800"
            >
              切换到中国区价格 →
            </a>
          </p>
        </div>

        {/* Solutions Table */}
        <div className="mt-16 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Scenario
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Solution
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Highlights
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {usSolutions.map((item) => (
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
            Add-On Services
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Service
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {usServices.map((service) => (
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

        {/* US Sales Contact Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            U.S. Sales Contact
          </h3>
          <div className="max-w-lg mx-auto">
            {usContacts.map((contact) => (
              <div key={contact.id} className="rounded-lg bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {contact.name}
                </h4>
                <p className="mt-2 text-gray-600">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm">
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
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
