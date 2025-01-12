import Layout from './components/layout'
import Link from 'next/link'
import Image from 'next/image'
import HotTrends from './components/hot-trends'
import { ExternalLink } from 'lucide-react'
import { Users, Leaf, Coins, Heart, Bitcoin } from 'lucide-react'

export default function Home() {
  const latestPosts = [
    { id: 1, title: "Top 5 Cryptocurrencies to Watch in 2025", image: "/placeholder.svg?height=200&width=300", link: "/blog/1" },
    { id: 2, title: "Life Hack: Boost Your Productivity with These Simple Tricks", image: "/placeholder.svg?height=200&width=300", link: "/blog/productivity-hacks" },
    { id: 3, title: "The Future of Money: Digital Currencies and Beyond", image: "/placeholder.svg?height=200&width=300", link: "/blog/future-of-money" },
  ]

  const trendingProducts = [
    { id: 1, name: "Smart Home Assistant", image: "/placeholder.svg?height=150&width=150", link: "/product/smart-home-assistant", affiliateLink: "https://example.com/smart-home-assistant" },
    { id: 2, name: "Eco-Friendly Water Bottle", image: "/placeholder.svg?height=150&width=150", link: "/product/eco-friendly-water-bottle", affiliateLink: "https://example.com/eco-water-bottle" },
    { id: 3, name: "Wireless Noise-Cancelling Headphones", image: "/placeholder.svg?height=150&width=150", link: "/product/wireless-noise-cancelling-headphones", affiliateLink: "https://example.com/wireless-headphones" },
  ]

  return (
    <Layout>
      <section className="mb-12 flex items-center gap-6">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="TrendyInsights Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to TrendyInsights</h1>
          <p className="text-xl mb-8">Your hub for exploring money, crypto, health, and life hacks.</p>
        </div>
      </section>
      <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block">
        Join Now
      </Link>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <Link href={post.link} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/blog" className="text-blue-500 hover:underline">View All Posts</Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-center space-x-8 mb-6">
          <Users size={32} className="text-blue-500" />
          <Leaf size={32} className="text-green-500" />
          <Coins size={32} className="text-yellow-500" />
          <Heart size={32} className="text-red-500" />
          <Bitcoin size={32} className="text-orange-500" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">Hot Trends</h2>
        <HotTrends />
        <div className="mt-6 text-center">
          <Link href="/trends" className="text-blue-500 hover:underline">View All Trends</Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center relative">
              <Image src={product.image} alt={product.name} width={150} height={150} className="mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
              <Link href={product.link} className="text-blue-500 hover:underline mb-8">
                Learn More
              </Link>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200"
                aria-label={`Affiliate link for ${product.name}`}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

