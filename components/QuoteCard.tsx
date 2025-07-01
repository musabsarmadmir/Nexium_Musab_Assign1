'use client'

import { useState } from 'react'
import { Quote } from '@/types'
import { cn, copyToClipboard } from '@/lib/utils'

interface QuoteCardProps {
  quote: Quote
  onFavorite?: (quote: Quote) => void
  onShare?: (quote: Quote) => void
  isFavorite?: boolean
  className?: string
}

export function QuoteCard({ 
  quote, 
  onFavorite, 
  onShare, 
  isFavorite = false,
  className 
}: QuoteCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = `"${quote.content}" - ${quote.author}`
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={cn(
      'quote-card group hover:scale-[1.02] transition-transform duration-300',
      className
    )}>
      {/* Quote Content */}
      <blockquote className="text-lg md:text-xl leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        "{quote.content}"
      </blockquote>
      
      {/* Author */}
      <cite className="block text-right text-gray-600 dark:text-gray-400 font-medium mb-4">
        — {quote.author}
      </cite>

      {/* Tags */}
      {quote.tags && quote.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {quote.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm transition-colors duration-200"
          title="Copy quote"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>

        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={() => onFavorite(quote)}
            className={cn(
              'flex-1 px-3 py-2 rounded-lg text-sm transition-colors duration-200',
              isFavorite
                ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800'
                : 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800'
            )}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '💔 Remove' : '❤️ Favorite'}
          </button>
        )}

        {/* Share Button */}
        {onShare && (
          <button
            onClick={() => onShare(quote)}
            className="flex-1 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm transition-colors duration-200"
            title="Share quote"
          >
            🔗 Share
          </button>
        )}
      </div>
    </div>
  )
}
