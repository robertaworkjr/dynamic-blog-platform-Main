import Layout from '../../components/layout'
import Image from 'next/image'

export default function FutureOfMoney() {
  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Future of Money" 
          width={800} 
          height={400} 
          className="w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">The Future of Money: Digital Currencies and Beyond</h1>
        <div className="text-gray-600 mb-4">
          <span>Published on May 25, 2025</span> • <span>By Alex Johnson</span> • <span>8 min read</span>
        </div>
        <p className="mb-4">Explore the evolving landscape of money and the impact of digital currencies:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Cryptocurrencies: The rise of decentralized digital currencies like Bitcoin and Ethereum.</li>
          <li>Central Bank Digital Currencies (CBDCs): Government-backed digital versions of traditional currencies.</li>
          <li>Blockchain Technology: The underlying technology powering many digital currencies and financial innovations.</li>
          <li>Decentralized Finance (DeFi): New financial services built on blockchain technology.</li>
          <li>Digital Wallets: The increasing prevalence of mobile payment solutions.</li>
          <li>Tokenization: Representing real-world assets as digital tokens on blockchain networks.</li>
          <li>Cross-Border Transactions: How digital currencies are changing international money transfers.</li>
          <li>Financial Inclusion: The potential for digital currencies to provide banking services to the unbanked.</li>
          <li>Regulatory Challenges: The evolving legal landscape surrounding digital currencies.</li>
          <li>Future Predictions: Potential scenarios for the future of money and finance.</li>
        </ul>
      </article>
    </Layout>
  )
}

