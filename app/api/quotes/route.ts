import { NextRequest, NextResponse } from 'next/server';

// Mock quote data - replace with real API or database later
const mockQuotes = [
  {
    id: '1',
    content: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    category: 'motivation',
    tags: ['work', 'passion', 'success'],
  },
  {
    id: '2',
    content: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
    category: 'leadership',
    tags: ['innovation', 'leadership', 'business'],
  },
  {
    id: '3',
    content:
      "Life is what happens to you while you're busy making other plans.",
    author: 'John Lennon',
    category: 'life',
    tags: ['life', 'wisdom', 'planning'],
  },
  {
    id: '4',
    content:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    category: 'inspiration',
    tags: ['dreams', 'future', 'belief'],
  },
  {
    id: '5',
    content:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    category: 'wisdom',
    tags: ['resilience', 'hope', 'strength'],
  },
  {
    id: '6',
    content:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
    category: 'motivation',
    tags: ['success', 'failure', 'courage', 'perseverance'],
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const random = searchParams.get('random');

    let quotes = mockQuotes;

    // Filter by category if provided
    if (category) {
      quotes = quotes.filter(
        (quote) => quote.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Return random quote if requested
    if (random === 'true') {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return NextResponse.json({ quote: randomQuote });
    }

    // Return all quotes (paginated in real implementation)
    return NextResponse.json({
      quotes,
      total: quotes.length,
      page: 1,
      limit: quotes.length,
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, author, category, tags } = body;

    // Validate required fields
    if (!content || !author) {
      return NextResponse.json(
        { error: 'Content and author are required' },
        { status: 400 }
      );
    }

    // Create new quote (in real implementation, save to database)
    const newQuote = {
      id: Date.now().toString(),
      content,
      author,
      category: category || 'general',
      tags: tags || [],
    };

    return NextResponse.json(
      {
        quote: newQuote,
        message: 'Quote created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      { error: 'Failed to create quote' },
      { status: 500 }
    );
  }
}
