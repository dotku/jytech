import Link from 'next/link'

export default function CustomAIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Custom AI Servers</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tailor-Made Solutions</h2>
          <p className="text-gray-700 mb-4">
            We provide custom-built AI server solutions designed to meet your specific requirements. 
            Our team of experts will work closely with you to understand your needs and deliver 
            the perfect solution for your business.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="text-xl font-semibold">Our Custom Services Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Customized server chassis design</li>
              <li>Specialized cooling solutions</li>
              <li>Custom power supply configurations</li>
              <li>Optimized GPU/CPU configurations</li>
              <li>Tailored storage solutions</li>
              <li>Custom rack mounting options</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Why Choose Custom?</h3>
            <p className="text-gray-700">
              Get exactly what you need for your specific AI workloads. Our custom solutions 
              ensure optimal performance, efficiency, and scalability for your unique requirements.
            </p>
          </div>
        </div>

        <div className="text-center space-x-4">
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact for Consultation
          </Link>
          <Link 
            href="/products"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Standard Products
          </Link>
        </div>
      </div>
    </div>
  )
}
