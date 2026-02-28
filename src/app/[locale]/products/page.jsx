import Link from "next/link";
import Image from "next/image";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { products } from "@/data/products";

const categoryGroups = [
  {
    title: "AI Computing Servers",
    subtitle: "High-performance GPU servers for AI training, inference, and research",
    categories: ["DeepSeek"],
    accent: "border-t-blue-600",
  },
  {
    title: "Server Chassis",
    subtitle: "Industrial-grade rackmount chassis for data center deployments",
    categories: ["Server Chassis"],
    accent: "border-t-emerald-600",
  },
  {
    title: "Industrial Embedded Boards",
    subtitle: "DSP+ARM+FPGA development boards and IoT gateways by Xinmai Technology",
    categories: ["Industrial SBC", "IoT Gateway"],
    accent: "border-t-amber-600",
  },
  {
    title: "Edge Computing & Vision",
    subtitle: "AI edge computing, industrial controllers, and machine vision by Sienovo",
    categories: ["AI Edge Computing", "Industrial Controller", "Machine Vision"],
    accent: "border-t-purple-600",
  },
  {
    title: "Custom Solutions",
    subtitle: "OEM/ODM hardware and software solutions tailored to your requirements",
    categories: ["Custom"],
    accent: "border-t-gray-600",
  },
];

function ProductCard({ product, locale }) {
  return (
    <Link href={`/${locale}/products/${product.id}`} className="block group">
      <div
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col"
      >
        <div className="relative w-full h-48 overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 whitespace-nowrap">
              {product.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
            {product.description}
          </p>
          <div className="text-xs text-blue-600 font-medium">
            {product.plantEquipment}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage({ params }) {
  const locale = params.locale;

  return (
    <GeneralLayout>
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Product Catalog
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            AI servers, industrial embedded boards, edge computing devices, and
            custom hardware solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["GPU Servers", "Embedded SBC", "Edge Computing", "Machine Vision", "Custom OEM"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {categoryGroups.map((group) => {
        const groupProducts = products.filter((p) =>
          group.categories.includes(p.category)
        );
        if (groupProducts.length === 0) return null;

        return (
          <section key={group.title} className="mb-16">
            <div className="mb-8">
              <div className={`inline-block w-12 h-1 ${group.accent.replace("border-t-", "bg-")} rounded mb-3`} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {group.title}
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                {group.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale={locale} />
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Need a Custom Configuration?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          We offer OEM/ODM services from PCB design to mass production.
          Contact us for a tailored solution.
        </p>
        <Link
          href="mailto:weijingjaylin+jytech@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Request Custom Quote
        </Link>
      </section>
    </GeneralLayout>
  );
}
