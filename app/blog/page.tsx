import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogIndex() {
  // Mock data for blog posts
  const blogPosts = [
    { id: 1, title: "The Future of Cryptocurrency: Trends to Watch", image: "/placeholder.svg?height=200&width=300", excerpt: "Explore the latest trends shaping the future of cryptocurrency and blockchain technology." },
    { id: 2, title: "10 Life Hacks to Boost Your Productivity", image: "/placeholder.svg?height=200&width=300", excerpt: "Discover simple yet effective life hacks that can significantly improve your daily productivity." },
    { id: 3, title: "Understanding the Basics of Personal Finance", image: "/placeholder.svg?height=200&width=300", excerpt: "Learn the fundamental principles of personal finance to take control of your financial future." },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

