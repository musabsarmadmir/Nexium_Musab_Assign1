# 📖 Nexium Quote Generator

A modern quote generator application built with Next.js, TypeScript, and Tailwind CSS. Generate inspirational quotes and save your favorites with a beautiful, responsive interface.

## ✨ Features

- 🎯 Generate random quotes from multiple curated selections
- ❤️ Save favorite quotes to your personal collection
- 🏷️ View quotes organized by tags (motivation, wisdom, success, etc.)
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 📱 Mobile-first design
- ⚡ Fast performance with Next.js

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: JSON
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/musabsarmadmir/Nexium_Musab_Assign1.git
   cd Nexium_Musab_Assign1
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                     # Next.js App Router
│   ├── api/                # API routes
│   │   ├── quotes/         # Quote generation endpoints
│   │   └── categories/     # Category management
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main quote generator page
├── components/             # Reusable React components
│   ├── QuoteCard.tsx       # Quote display component
│   └── LoadingSpinner.tsx  # Loading animation
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions and utilities
├── prisma/                 # Database schema and migrations
│   └── schema.prisma       # Database schema definition
├── types/                  # TypeScript type definitions
│   └── index.ts            # Global type definitions
└── README.md
```

## 🎯 Usage

1. **Generate Quotes**: Click the "Generate New Quote" button to discover inspirational quotes
2. **Save Favorites**: Click the heart button to add quotes to your personal collection
3. **Browse Tags**: View categorized tags for each quote (motivation, wisdom, success, etc.)
4. **View Favorites**: Scroll down to see your saved quotes collection

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push database schema
- `pnpm db:studio` - Open Prisma Studio

## 📊 Quote Collection

The application features 13 inspirational quotes from:

- **Steve Jobs** (2 quotes) - Innovation and authenticity
- **Eleanor Roosevelt** - Dreams and future
- **Aristotle** - Hope and perseverance  
- **Tony Robbins** - Action and success
- **Albert Einstein** - Opportunity in challenges
- **Winston Churchill** - Courage and persistence
- **Ralph Waldo Emerson** - Self-determination
- **Walt Disney** - Taking action
- **John D. Rockefeller** - Excellence and ambition
- **John Lennon** - Life philosophy
- **Chinese Proverb** - Timing and wisdom

## 🌐 Deployment

This project is deployed on Vercel:

🔗 **Live Demo**: [https://nexium-musab-assign1-41hrs5okc-trackc.vercel.app](https://nexium-musab-assign1-41hrs5okc-trackc.vercel.app)

### Deploy Your Own

1. Fork this repository
2. Connect your repository to Vercel
3. Deploy with default settings
4. Your app will be live!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Musab Sarmad**

- GitHub: [@musabsarmadmir](https://github.com/musabsarmadmir)

## 🙏 Acknowledgments

- Inspired by the wisdom of great thinkers and leaders
- Built with [Next.js](https://nextjs.org/) for the amazing framework
- Styled with [Tailwind CSS](https://tailwindcss.com/) for beautiful UI
- Deployed on [Vercel](https://vercel.com/) for hosting