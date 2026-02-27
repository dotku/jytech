"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const categoryGroups = [
  {
    title: "AI Computing Servers",
    description: "High-performance GPU servers for AI training & inference",
    categories: ["DeepSeek"],
    accent: "bg-blue-600",
    limit: 4,
  },
  {
    title: "Industrial Embedded Boards",
    description: "DSP+ARM+FPGA boards by Xinmai Technology",
    categories: ["Industrial SBC", "IoT Gateway"],
    accent: "bg-amber-600",
    limit: 4,
  },
  {
    title: "Edge Computing & Vision",
    description: "AI edge computing & machine vision by Sienovo",
    categories: ["AI Edge Computing", "Industrial Controller", "Machine Vision"],
    accent: "bg-purple-600",
    limit: 4,
  },
];

export default function ProductHighlightCards() {
  return (
    <div className="space-y-12">
      {categoryGroups.map((group) => {
        const groupProducts = products
          .filter((p) => group.categories.includes(p.category))
          .slice(0, group.limit);
        if (groupProducts.length === 0) return null;

        return (
          <div key={group.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-1 h-8 ${group.accent} rounded`} />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                <p className="text-sm text-gray-500">{group.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="relative w-full h-32 sm:h-40 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="text-center pt-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          View All Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
