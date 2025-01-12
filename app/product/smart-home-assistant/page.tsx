import Layout from '../../components/layout'
import Image from 'next/image'

export default function SmartHomeAssistant() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Smart Home Assistant</h1>
        <Image src="/placeholder.svg?height=300&width=300" alt="Smart Home Assistant" width={300} height={300} className="mb-4 rounded-lg" />
        <p className="mb-4">Experience the future of home automation with our cutting-edge Smart Home Assistant. This device seamlessly integrates with your home ecosystem, allowing you to control lights, thermostats, security systems, and more with just your voice or smartphone.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Voice-activated controls</li>
          <li>Compatible with major smart home devices</li>
          <li>Energy-saving features</li>
          <li>Advanced AI for personalized assistance</li>
          <li>Regular software updates for improved functionality</li>
        </ul>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</a>
      </div>
    </Layout>
  )
}

