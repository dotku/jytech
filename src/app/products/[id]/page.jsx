import Link from "next/link";
import Image from "next/image";
import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

const useCasesByCategory = {
  DeepSeek: ["AI Model Training & Fine-tuning", "Deep Learning Research", "Large Language Models (LLM)", "Data Analytics & Processing"],
  "Server Chassis": ["Data Center Deployment", "Enterprise Computing", "Cloud Infrastructure", "High-Performance Computing"],
  "Industrial SBC": ["Industrial Automation", "Signal Processing", "Heterogeneous Computing", "Machine Vision"],
  "IoT Gateway": ["IoT Data Collection", "Edge Computing", "Protocol Conversion", "Remote Monitoring"],
  "AI Edge Computing": ["Video Analytics", "Machine Vision Inference", "Smart Manufacturing", "Intelligent Surveillance"],
  "Industrial Controller": ["PLC Replacement", "Motion Control", "Process Automation", "Factory Automation"],
  "Machine Vision": ["Automated Optical Inspection", "Quality Control", "Defect Detection", "Robotic Guidance"],
  Custom: ["Custom AI Solutions", "OEM/ODM Manufacturing", "Enterprise Integration", "Specialized Workloads"],
};

const categoryColors = {
  DeepSeek: "from-blue-700 to-blue-900",
  "Server Chassis": "from-emerald-700 to-emerald-900",
  "Industrial SBC": "from-amber-700 to-amber-900",
  "IoT Gateway": "from-amber-700 to-amber-900",
  "AI Edge Computing": "from-purple-700 to-purple-900",
  "Industrial Controller": "from-purple-700 to-purple-900",
  "Machine Vision": "from-purple-700 to-purple-900",
  Custom: "from-gray-700 to-gray-900",
};

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  const useCases = useCasesByCategory[product.category] || useCasesByCategory.Custom;
  const gradientColor = categoryColors[product.category] || categoryColors.Custom;

  return (
    <GeneralLayout>
      {/* Hero Header */}
      <section className={`relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-r ${gradientColor}`}>
        <div className="px-6 py-12 sm:px-12 sm:py-16">
          <Link
            href="/products"
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/20 mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-white/80 max-w-2xl">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column — Images */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="relative h-24 sm:h-32 rounded-lg overflow-hidden shadow-sm bg-gray-50"
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 33vw, 22vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Specs & Actions */}
        <div className="space-y-6">
          {/* Hardware Configuration */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Hardware Configuration
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Equipment
                </span>
                <p className="text-gray-800 mt-1">{product.plantEquipment}</p>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Parameters
                </span>
                <p className="text-gray-800 mt-1">{product.parameters}</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Recommended Use Cases
            </h2>
            <ul className="space-y-2">
              {useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="mailto:weijingjaylin+jytech@gmail.com"
              className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Request Quote
            </Link>
            {(product.category === "DeepSeek" || product.category === "Custom") && (
              <Link
                href="mailto:weijingjaylin+jytech@gmail.com?subject=Custom Configuration Request"
                className="block w-full text-center bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Customize Configuration
              </Link>
            )}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
