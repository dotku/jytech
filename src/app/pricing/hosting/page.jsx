import { hostingSolutions, outsourcingSolutions, chinaContacts } from '@/data/products';

export default function HostingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            网站托管方案
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            为您提供多种网站托管解决方案，满足不同场景需求
          </p>
        </div>

        {/* Hosting Solutions Table */}
        <div className="mt-16 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">方案</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">搭建难度</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">年付费成本</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">初始人工成本</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">年总成本（估）</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">适合场景</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {hostingSolutions.map((solution) => (
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

        {/* Outsourcing Solutions Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            🔧 如果你请人搭建
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">外包/请人搭建方式</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">一次费用估算</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">维护成本</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {outsourcingSolutions.map((solution) => (
                  <tr key={solution.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{solution.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.oneTimeCost}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{solution.maintenanceCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* China Sales Contact Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            中国区销售联系方式
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {chinaContacts.map((contact) => (
              <div key={contact.id} className="rounded-lg bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900">{contact.name}</h4>
                <p className="mt-2 text-gray-600">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex">
                    <dt className="w-20 flex-shrink-0 text-gray-500">微信:</dt>
                    <dd className="text-gray-900">{contact.wechat}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-20 flex-shrink-0 text-gray-500">邮箱:</dt>
                    <dd className="text-gray-900">{contact.email}</dd>
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
