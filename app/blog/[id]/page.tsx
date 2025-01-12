import Layout from '../../components/layout'
import BlogPost from '../../components/blog-post'
import HotTrends from '../../components/hot-trends'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Cryptocurrency: Trends to Watch",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Cryptocurrency has come a long way since the introduction of Bitcoin in 2009. As we look to the future, several trends are shaping the landscape of digital currencies and blockchain technology.</p>
      <h2>1. Increased Institutional Adoption</h2>
      <p>Major financial institutions and corporations are increasingly embracing cryptocurrencies, both as an investment and as a means of transaction.</p>
      <h2>2. Rise of Decentralized Finance (DeFi)</h2>
      <p>DeFi platforms are revolutionizing traditional financial services, offering lending, borrowing, and trading without intermediaries.</p>
      <h2>3. Central Bank Digital Currencies (CBDCs)</h2>
      <p>Many countries are exploring or developing their own digital currencies, which could significantly impact the global financial system.</p>
    `,
    relatedProducts: [
      { id: 1, name: "Crypto Wallet X", affiliateLink: "https://example.com/crypto-wallet-x" },
      { id: 2, name: "Blockchain for Dummies Book", affiliateLink: "https://example.com/blockchain-book" },
      { id: 3, name: "Secure Password Manager", affiliateLink: "https://example.com/password-manager" },
    ]
  },
  // Add more blog posts here...
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    return <Layout><h1>Blog post not found</h1></Layout>
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <BlogPost post={post} />
        </div>
        <aside className="md:w-1/3">
          <HotTrends />
        </aside>
      </div>
    </Layout>
  )
}

