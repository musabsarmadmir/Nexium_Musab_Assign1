'use client'

import { useState, useEffect } from 'react'

interface Quote {
  id: string
  content: string
  author: string
  tags?: string[]
}

export default function HomePage() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState<Quote[]>([])

  const fetchQuote = async () => {
    setLoading(true)
    try {
      // Mock quote for now - will connect to real API later
      const mockQuotes: Quote[] = [
        {
          id: '1',
          content: 'The only way to do great work is to love what you do.',
          author: 'Steve Jobs',
          tags: ['motivation', 'work']
        },
        {
          id: '2', 
          content: 'Innovation distinguishes between a leader and a follower.',
          author: 'Steve Jobs',
          tags: ['innovation', 'leadership']
        },
        {
          id: '3',
          content: 'Life is what happens to you while you\'re busy making other plans.',
          author: 'John Lennon',
          tags: ['life', 'wisdom']
        }
      ]
      
      const randomQuote = mockQuotes[Math.floor(Math.random() * mockQuotes.length)]
      setQuote(randomQuote)
    } catch (error) {
      console.error('Error fetching quote:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToFavorites = () => {
    if (quote && !favorites.find(fav => fav.id === quote.id)) {
      setFavorites([...favorites, quote])
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">
            Nexium Quote Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover inspiration, one quote at a time
          </p>
        </div>

        {/* Quote Display */}
        <div className="quote-card mb-8 animate-fade-in">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="loading-spinner"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                Generating quote...
              </span>
            </div>
          ) : quote ? (
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 text-gray-800 dark:text-gray-200">
                "{quote.content}"
              </blockquote>
              <cite className="text-lg text-gray-600 dark:text-gray-400">
                — {quote.author}
              </cite>
              {quote.tags && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                Click the button below to generate your first quote!
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Generating...' : 'Generate New Quote'}
          </button>
          
          {quote && (
            <button
              onClick={addToFavorites}
              className="btn-secondary"
            >
              ❤️ Add to Favorites
            </button>
          )}
        </div>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Your Favorite Quotes ({favorites.length})
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {favorites.map((fav) => (
                <div key={fav.id} className="quote-card">
                  <blockquote className="text-lg mb-3">
                    "{fav.content}"
                  </blockquote>
                  <cite className="text-gray-600 dark:text-gray-400">
                    — {fav.author}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Curated Quotes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hand-picked inspirational quotes from renowned personalities
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build your personal collection of meaningful quotes
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Share & Inspire</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share quotes with friends and spread positivity
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
