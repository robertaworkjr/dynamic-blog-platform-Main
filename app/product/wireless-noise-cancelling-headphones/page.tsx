import Layout from '../../components/layout'
import Image from 'next/image'

export default function WirelessNoiseCancellingHeadphones() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Wireless Noise-Cancelling Headphones</h1>
        <Image src="/placeholder.svg?height=300&width=300" alt="Wireless Noise-Cancelling Headphones" width={300} height={300} className="mb-4 rounded-lg" />
        <p className="mb-4">Immerse yourself in crystal-clear audio with our Wireless Noise-Cancelling Headphones. Designed for comfort and superior sound quality, these headphones are perfect for music lovers, frequent travelers, and anyone who wants to enjoy their audio without distractions.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Advanced noise-cancelling technology</li>
          <li>Bluetooth 5.0 for seamless wireless connection</li>
          <li>30+ hours of battery life</li>
          <li>Comfortable over-ear design</li>
          <li>Built-in microphone for calls</li>
          <li>Touch controls for easy operation</li>
        </ul>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</a>
      </div>
    </Layout>
  )
}

