import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl opacity-90">{product.description}</p>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Product Images */}
            <div className="mb-12">
              {/* Main Image */}
              <div className="relative w-full h-[400px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-32 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 300px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Hardware Configuration */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                  Hardware Configuration
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Equipment:</span>
                    <p className="text-gray-700">{product.plantEquipment}</p>
                  </div>
                  <div>
                    <span className="font-medium">Parameters:</span>
                    <p className="text-gray-700">{product.parameters}</p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                  Recommended Use Cases
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.category === "DeepSeek" ? (
                    <>
                      <li>AI Model Training</li>
                      <li>Deep Learning Research</li>
                      <li>Large Language Models</li>
                      <li>Data Analytics</li>
                    </>
                  ) : product.category === "Server Chassis" ? (
                    <>
                      <li>Data Center Deployment</li>
                      <li>Enterprise Computing</li>
                      <li>Cloud Infrastructure</li>
                      <li>High-Performance Computing</li>
                    </>
                  ) : (
                    <>
                      <li>Custom AI Solutions</li>
                      <li>Specialized Workloads</li>
                      <li>Enterprise Integration</li>
                      <li>Scalable Infrastructure</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/products"
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                Back to Products
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Request Quote
              </Link>
              {product.category === "DeepSeek" && (
                <Link
                  href="/custom"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  Customize Configuration
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
