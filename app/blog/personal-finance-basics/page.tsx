import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function PersonalFinanceBasics() {
  return (
    <Layout>
      <article className="max-w-2xl mx-auto">
        <Image 
          src="/placeholder.svg?height=400&width=800" 
          alt="Personal Finance Basics" 
          width={800} 
          height={400} 
          className="w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Understanding the Basics of Personal Finance</h1>
        <div className="text-gray-600 mb-4">
          <span>Published on May 20, 2025</span> • <span>By Jane Smith</span> • <span>7 min read</span>
        </div>
        <p className="mb-4">Learn the fundamental principles of personal finance to take control of your financial future:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Budgeting: Track your income and expenses to understand your spending habits.</li>
          <li>Emergency Fund: Build a savings cushion to cover 3-6 months of expenses.</li>
          <li>Debt Management: Prioritize paying off high-interest debt.</li>
          <li>Saving and Investing: Start early and make it a habit to save and invest for long-term goals.</li>
          <li>Insurance: Protect yourself and your assets with appropriate insurance coverage.</li>
          <li>Credit Score: Understand and maintain a good credit score for better financial opportunities.</li>
          <li>Retirement Planning: Start planning for retirement early, even if it seems far away.</li>
          <li>Tax Planning: Understand basic tax concepts to optimize your financial decisions.</li>
          <li>Financial Goals: Set short-term and long-term financial goals to guide your decisions.</li>
          <li>Continuous Learning: Stay informed about personal finance topics and trends.</li>
        </ul>
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Read More</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/investment-strategies" className="text-blue-600 hover:underline">
                Investment Strategies for Beginners
              </Link>
            </li>
            <li>
              <Link href="/blog/debt-management" className="text-blue-600 hover:underline">
                Effective Debt Management Techniques
              </Link>
            </li>
            <li>
              <Link href="/blog/retirement-planning" className="text-blue-600 hover:underline">
                Early Retirement Planning: What You Need to Know
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

