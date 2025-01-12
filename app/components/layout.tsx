import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">TrendyInsights</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="/trends" className="hover:text-gray-300">Hot Trends</Link>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Sign Up</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © 2025 TrendyInsights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

