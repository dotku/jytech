import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  const deepseekProducts = products.filter((p) => p.category === "DeepSeek");
  const chassisProducts = products.filter(
    (p) => p.category === "Server Chassis"
  );
  const customProducts = products.filter((p) => p.category === "Custom");

  const ProductCard = ({ product }) => (
    <div
      key={product.id}
      className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600">
            {product.plantEquipment}
          </span>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">
        JYTECH AI Solutions
      </h1>

      {/* DeepSeek Products Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">
          DeepSeek AI Servers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deepseekProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Server Chassis Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">
          Server Chassis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chassisProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Custom Solutions Section */}
      <div className="bg-blue-50 rounded-xl p-8 mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">
          Custom Solutions
        </h2>
        <div className="max-w-2xl mx-auto">
          {customProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/custom"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Request Custom Configuration
          </Link>
        </div>
      </div>
    </div>
  );
}
