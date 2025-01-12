import Layout from '../../components/layout'
import Image from 'next/image'

export default function TopCryptocurrencies() {
  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Top Cryptocurrencies" 
          width={800} 
          height={400} 
          className="w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Top 5 Cryptocurrencies to Watch in 2025</h1>
        <div className="text-gray-600 mb-4">
          <span>Published on May 30, 2025</span> • <span>By Crypto Expert</span> • <span>6 min read</span>
        </div>
        <p className="mb-4">As the cryptocurrency market continues to evolve, here are the top 5 cryptocurrencies to keep an eye on in 2025:</p>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Bitcoin (BTC):</strong> Still the king of cryptocurrencies, Bitcoin continues to dominate the market with its strong network effect and increasing institutional adoption.
          </li>
          <li>
            <strong>Ethereum (ETH):</strong> With its smart contract capabilities and the ongoing transition to Ethereum 2.0, Ethereum remains a top contender in the crypto space.
          </li>
          <li>
            <strong>Cardano (ADA):</strong> Known for its research-driven approach and focus on sustainability, Cardano is gaining traction as a potential "Ethereum killer."
          </li>
          <li>
            <strong>Polkadot (DOT):</strong> This interoperability-focused blockchain is aiming to connect different blockchain networks, potentially solving a major challenge in the crypto ecosystem.
          </li>
          <li>
            <strong>Chainlink (LINK):</strong> As the leading decentralized oracle network, Chainlink plays a crucial role in connecting smart contracts with real-world data.
          </li>
        </ol>
        <p className="mt-4">
          Remember, the cryptocurrency market is highly volatile and subject to rapid changes. Always do your own research and consider consulting with a financial advisor before making any investment decisions.
        </p>
      </article>
    </Layout>
  )
}

