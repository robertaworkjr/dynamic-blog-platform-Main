import Layout from '../../components/layout'
import Image from 'next/image'

export default function EcoFriendlyWaterBottle() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Eco-Friendly Water Bottle</h1>
        <Image src="/placeholder.svg?height=300&width=300" alt="Eco-Friendly Water Bottle" width={300} height={300} className="mb-4 rounded-lg" />
        <p className="mb-4">Stay hydrated while reducing your environmental impact with our Eco-Friendly Water Bottle. Made from sustainable materials, this bottle is designed to last and help you cut down on single-use plastics.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Made from recycled materials</li>
          <li>BPA-free and non-toxic</li>
          <li>Insulated to keep drinks cold for 24 hours or hot for 12 hours</li>
          <li>Leak-proof design</li>
          <li>Available in various colors and sizes</li>
        </ul>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</a>
      </div>
    </Layout>
  )
}

