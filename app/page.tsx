'use client';

import { useState, useEffect } from 'react';

interface Quote {
  id: string;
  content: string;
  author: string;
  tags?: string[];
}

export default function HomePage() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<Quote[]>([]);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      // Mock quote for now - will connect to real API later
      const mockQuotes: Quote[] = [
        {
          id: '1',
          content: 'The only way to do great work is to love what you do.',
          author: 'Steve Jobs',
          tags: ['motivation', 'work'],
        },
        {
          id: '2',
          content: 'Innovation distinguishes between a leader and a follower.',
          author: 'Steve Jobs',
          tags: ['innovation', 'leadership'],
        },
        {
          id: '3',
          content:
            "Life is what happens to you while you're busy making other plans.",
          author: 'John Lennon',
          tags: ['life', 'wisdom'],
        },
        {
          id: '4',
          content: 'The future belongs to those who believe in the beauty of their dreams.',
          author: 'Eleanor Roosevelt',
          tags: ['dreams', 'future', 'motivation'],
        },
        {
          id: '5',
          content: 'It is during our darkest moments that we must focus to see the light.',
          author: 'Aristotle',
          tags: ['hope', 'perseverance', 'wisdom'],
        },
        {
          id: '6',
          content: 'The only impossible journey is the one you never begin.',
          author: 'Tony Robbins',
          tags: ['journey', 'motivation', 'success'],
        },
        {
          id: '7',
          content: 'In the middle of difficulty lies opportunity.',
          author: 'Albert Einstein',
          tags: ['opportunity', 'challenges', 'wisdom'],
        },
        {
          id: '8',
          content: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
          author: 'Winston Churchill',
          tags: ['success', 'failure', 'courage'],
        },
        {
          id: '9',
          content: 'The only person you are destined to become is the person you decide to be.',
          author: 'Ralph Waldo Emerson',
          tags: ['self-improvement', 'destiny', 'motivation'],
        },
        {
          id: '10',
          content: 'Your time is limited, don\'t waste it living someone else\'s life.',
          author: 'Steve Jobs',
          tags: ['time', 'authenticity', 'life'],
        },
        {
          id: '11',
          content: 'The way to get started is to quit talking and begin doing.',
          author: 'Walt Disney',
          tags: ['action', 'motivation', 'success'],
        },
        {
          id: '12',
          content: 'Don\'t be afraid to give up the good to go for the great.',
          author: 'John D. Rockefeller',
          tags: ['ambition', 'excellence', 'risk'],
        },
        {
          id: '13',
          content: 'The best time to plant a tree was 20 years ago. The second best time is now.',
          author: 'Chinese Proverb',
          tags: ['time', 'action', 'wisdom'],
        },
      ];

      const randomQuote =
        mockQuotes[Math.floor(Math.random() * mockQuotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = () => {
    if (quote && !favorites.find((fav) => fav.id === quote.id)) {
      setFavorites([...favorites, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-gradient mb-4 text-5xl font-bold">
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
              <blockquote className="mb-6 text-2xl font-medium leading-relaxed text-gray-800 dark:text-gray-200 md:text-3xl">
                &ldquo;{quote.content}&rdquo;
              </blockquote>
              <cite className="text-lg text-gray-600 dark:text-gray-400">
                — {quote.author}
              </cite>
              {quote.tags && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Click the button below to generate your first quote!
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate New Quote'}
          </button>

          {quote && (
            <button onClick={addToFavorites} className="btn-secondary">
              ❤️ Add to Favorites
            </button>
          )}
        </div>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Your Favorite Quotes ({favorites.length})
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {favorites.map((fav) => (
                <div key={fav.id} className="quote-card">
                  <blockquote className="mb-3 text-lg">
                    &ldquo;{fav.content}&rdquo;
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
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="mb-4 text-4xl">🎯</div>
            <h3 className="mb-2 text-xl font-semibold">Curated Quotes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hand-picked inspirational quotes from renowned personalities
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="mb-4 text-4xl">❤️</div>
            <h3 className="mb-2 text-xl font-semibold">Save Favorites</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build your personal collection of meaningful quotes
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-semibold">Share & Inspire</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share quotes with friends and spread positivity
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
