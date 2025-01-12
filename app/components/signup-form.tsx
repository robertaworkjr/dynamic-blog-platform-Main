'use client'

import { useState } from 'react'

export default function SignUpForm() {
  const [likes, setLikes] = useState(['', '', ''])
  const [gripes, setGripes] = useState(['', '', ''])
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ email, likes, gripes })
    alert('Thank you for signing up! We\'ll personalize your experience based on your preferences.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Three things you like</label>
        {likes.map((like, index) => (
          <input
            key={index}
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={like}
            onChange={(e) => setLikes(likes.map((l, i) => i === index ? e.target.value : l))}
          />
        ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Three gripes about life</label>
        {gripes.map((gripe, index) => (
          <input
            key={index}
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={gripe}
            onChange={(e) => setGripes(gripes.map((g, i) => i === index ? e.target.value : g))}
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Sign Up
      </button>
    </form>
  )
}

