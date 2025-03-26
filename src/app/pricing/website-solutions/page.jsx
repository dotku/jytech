"use client";
import { hostingSolutions, outsourcingSolutions, usContacts, chinaContacts } from '@/data/products';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PricingDemoProjectCards from "@/components/Cards/PricingDemoProjectCards";

export default function WebsiteSolutionsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentRegion, setCurrentRegion] = useState('us');

  useEffect(() => {
    const region = searchParams.get('region')?.toLowerCase();
    if (region && ['cn', 'us'].includes(region)) {
      setCurrentRegion(region);
    }
  }, [searchParams]);

  const contacts = currentRegion === 'cn' ? chinaContacts : usContacts;
  const hostingSolutionsForRegion = hostingSolutions.filter(solution => solution.region === currentRegion);
  const outsourcingSolutionsForRegion = outsourcingSolutions.filter(solution => solution.region === currentRegion);

  const switchRegion = (newRegion) => {
    const url = new URL(window.location.href);
    url.searchParams.set('region', newRegion);
    router.push(url.pathname + url.search);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Website Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {currentRegion === 'cn' ? 
              '为您提供多种网站托管解决方案，满足不同场景需求' : 
              'Comprehensive hosting and development solutions for your needs'
            }
          </p>
          
          {/* Region Selector */}
          <div className="mt-6 inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => switchRegion('us')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                currentRegion === 'us'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              🇺🇸 U.S. Region
            </button>
            <button
              type="button"
              onClick={() => switchRegion('cn')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                currentRegion === 'cn'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              🇨🇳 中国区
            </button>
          </div>
        </div>

        {/* Hosting Solutions Table */}
        <div className="mt-16">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '方案' : 'Platform'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '搭建难度' : 'Difficulty'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '年付费成本' : 'Annual Cost'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '初始人工成本' : 'Initial Labor Cost'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '年总成本（估）' : 'Est. Total Annual Cost'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '适合场景' : 'Best For'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {hostingSolutionsForRegion.map((solution) => (
                  <tr key={solution.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{solution.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.difficulty}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.yearlyFee}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.initialLaborCost}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.estimatedYearlyCost}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.suitableScenarios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            {currentRegion === 'cn' 
              ? '本价格方案为基础包方案，如果需要特殊需求，请联系我们的客服了解详情' 
              : 'These are our base package prices. For custom requirements, please contact our sales team for details.'}
          </p>
        </div>

        {/* Outsourcing Solutions Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {currentRegion === 'cn' ? '如果你请人搭建' : 'Development Services'}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '外包/请人搭建方式' : 'Service Type'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '一次费用估算' : 'One-time Cost'}
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {currentRegion === 'cn' ? '维护成本' : 'Maintenance Cost'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {outsourcingSolutionsForRegion.map((solution) => (
                  <tr key={solution.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{solution.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.oneTimeCost}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.maintenanceCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            {currentRegion === 'cn' 
              ? '以上价格为参考价格，具体项目报价请联系我们的销售团队' 
              : 'Prices are for reference. Please contact our sales team for a detailed quote for your specific project.'}
          </p>
        </div>

        {/* Demo Projects Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {currentRegion === 'cn' ? '成功案例' : 'Case Studies'}
          </h3>
          <PricingDemoProjectCards />
        </div>

        {/* Sales Contact Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            {currentRegion === 'cn' ? '中国区销售' : 'U.S. Sales Contact'}
          </h3>
          <div className="max-w-lg mx-auto">
            {contacts.map((contact) => (
              <div key={contact.id} className="rounded-lg bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">{contact.name}</h4>
                <p className="mt-2 text-gray-600">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  {contact.wechat && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">WeChat:</dt>
                      <dd className="text-gray-900">{contact.wechat}</dd>
                    </div>
                  )}
                  {contact.email && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">Email:</dt>
                      <dd className="text-gray-900">
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex">
                      <dt className="w-20 flex-shrink-0 text-gray-500">Phone:</dt>
                      <dd className="text-gray-900">
                        <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-800">
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
