'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function BlogPost({ post }: { post: any }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment('')
    }
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-64 object-cover mb-6" />
      <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {post.relatedProducts.map((product: any) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center relative">
              <h4 className="text-lg font-semibold text-center mb-2">{product.name}</h4>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200"
                aria-label={`Affiliate link for ${product.name}`}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {comments.map((c, index) => (
          <p key={index} className="bg-gray-100 p-3 rounded mb-2">{c}</p>
        ))}
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Leave a comment..."
          ></textarea>
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Post Comment
          </button>
        </form>
      </div>
    </article>
  )
}

