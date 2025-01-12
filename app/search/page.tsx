import Layout from '../components/layout'
import Link from 'next/link'

// This would typically come from a database or API based on the search query
const searchResults = [
  { id: 1, title: "Understanding Cryptocurrency Basics", type: "blog" },
  { id: 2, title: "Top 10 Life Hacks for Productivity", type: "blog" },
  { id: 3, title: "Smart Investment Strategies for 2025", type: "blog" },
  { id: 4, title: "Crypto Wallet X", type: "product" },
]

export default function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <ul className="space-y-4">
        {searchResults.map((result) => (
          <li key={result.id} className="border-b pb-4">
            <Link
              href={result.type === 'blog' ? `/blog/${result.id}` : `/product/${result.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {result.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">{result.type === 'blog' ? 'Blog Post' : 'Product'}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

