'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Newsletter signup:', email)
    alert('Thank you for signing up for our newsletter!')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

