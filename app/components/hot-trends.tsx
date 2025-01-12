import Link from 'next/link'
import Image from 'next/image'

export default function HotTrends() {
  const trends = [
    { id: 1, title: "The Rise of Decentralized Finance (DeFi)", category: "Cryptocurrency", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, title: "Mindfulness Apps Gaining Popularity", category: "Health", image: "/placeholder.svg?height=100&width=100" },
    { id: 3, title: "Sustainable Investing on the Rise", category: "Money", image: "/placeholder.svg?height=100&width=100" },
    { id: 4, title: "Digital Minimalism: The New Productivity Hack", category: "Life Hacks", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Hot Trends This Week</h2>
      <ul className="space-y-4">
        {trends.map((trend) => (
          <li key={trend.id} className="bg-white p-4 rounded shadow flex items-center space-x-4">
            <Image
              src={trend.image}
              alt={trend.title}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <span className="text-sm font-semibold text-blue-600">{trend.category}</span>
              <h3 className="text-lg font-semibold mt-1">{trend.title}</h3>
              <Link href={`/trends/${trend.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

