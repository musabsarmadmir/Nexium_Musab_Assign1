import { NextResponse } from 'next/server'

const categories = [
  {
    id: '1',
    name: 'Motivation',
    slug: 'motivation',
    description: 'Quotes to inspire and motivate you'
  },
  {
    id: '2',
    name: 'Leadership',
    slug: 'leadership', 
    description: 'Wisdom from great leaders'
  },
  {
    id: '3',
    name: 'Life',
    slug: 'life',
    description: 'Reflections on life and living'
  },
  {
    id: '4',
    name: 'Inspiration',
    slug: 'inspiration',
    description: 'Uplifting and inspiring thoughts'
  },
  {
    id: '5',
    name: 'Wisdom',
    slug: 'wisdom',
    description: 'Timeless wisdom and insights'
  },
  {
    id: '6',
    name: 'Success',
    slug: 'success',
    description: 'Quotes about achieving success'
  }
]

export async function GET() {
  try {
    return NextResponse.json({ categories })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}
