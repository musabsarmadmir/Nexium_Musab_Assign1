'use client';

import { useState } from 'react';
import { Quote } from '@/types';
import { cn, copyToClipboard } from '@/lib/utils';

interface QuoteCardProps {
  quote: Quote;
  onFavorite?: (quote: Quote) => void;
  onShare?: (quote: Quote) => void;
  isFavorite?: boolean;
  className?: string;
}

export function QuoteCard({
  quote,
  onFavorite,
  onShare,
  isFavorite = false,
  className,
}: QuoteCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `"${quote.content}" - ${quote.author}`;
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        'quote-card group transition-transform duration-300 hover:scale-[1.02]',
        className
      )}
    >
      {/* Quote Content */}
      <blockquote className="mb-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200 md:text-xl">
        "{quote.content}"
      </blockquote>

      {/* Author */}
      <cite className="mb-4 block text-right font-medium text-gray-600 dark:text-gray-400">
        — {quote.author}
      </cite>

      {/* Tags */}
      {quote.tags && quote.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {quote.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex-1 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          title="Copy quote"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>

        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={() => onFavorite(quote)}
            className={cn(
              'flex-1 rounded-lg px-3 py-2 text-sm transition-colors duration-200',
              isFavorite
                ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800'
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800'
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
            className="flex-1 rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700 transition-colors duration-200 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
            title="Share quote"
          >
            🔗 Share
          </button>
        )}
      </div>
    </div>
  );
}
