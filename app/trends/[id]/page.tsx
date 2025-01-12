import Layout from '../../components/layout'
import { notFound } from 'next/navigation'

const trends = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance (DeFi)",
    category: "Cryptocurrency",
    content: "Decentralized Finance, or DeFi, is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. DeFi eliminates intermediaries by allowing people, merchants, and businesses to conduct financial transactions through emerging technology."
  },
  {
    id: 2,
    title: "Mindfulness Apps Gaining Popularity",
    category: "Health",
    content: "As stress levels rise globally, more people are turning to mindfulness and meditation apps to find peace and improve their mental health. These apps offer guided meditations, breathing exercises, and sleep stories, making mindfulness practices more accessible to everyone."
  },
  {
    id: 3,
    title: "Sustainable Investing on the Rise",
    category: "Money",
    content: "Sustainable investing, which considers environmental, social, and governance (ESG) factors, is gaining traction among investors. This approach aims to generate long-term financial returns while also creating a positive impact on society and the environment."
  },
  {
    id: 4,
    title: "Digital Minimalism: The New Productivity Hack",
    category: "Life Hacks",
    content: "Digital minimalism is a philosophy that helps you question what digital communication tools and behaviors add the most value to your life. By adopting a minimalist approach to technology, people are finding ways to increase productivity and reduce digital overwhelm."
  },
]

export default function TrendPage({ params }: { params: { id: string } }) {
  const trend = trends.find(t => t.id === parseInt(params.id))

  if (!trend) {
    notFound()
  }

  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <span className="text-sm font-semibold text-blue-600">{trend.category}</span>
        <h1 className="text-3xl font-bold my-4">{trend.title}</h1>
        <p className="text-gray-700">{trend.content}</p>
      </article>
    </Layout>
  )
}

