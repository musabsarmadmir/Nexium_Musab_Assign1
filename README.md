# 📖 Nexium Quote Generator

A modern, full-stack quote generator application built with Next.js, TypeScript, and Tailwind CSS. Generate, save, and share inspirational quotes with a beautiful, responsive interface.

## ✨ Features

- 🎯 Generate random quotes from multiple sources
- 💾 Save favorite quotes to your personal collection
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔐 User authentication with NextAuth.js
- 📱 Mobile-first design
- 🌙 Dark/Light mode toggle
- 📊 Quote analytics and statistics
- 🔗 Share quotes on social media
- 🚀 Fast performance with Next.js

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase) + MongoDB Atlas
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel
- **Automation**: n8n

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/Nexium_Musab_Assign1.git
   cd Nexium_Musab_Assign1
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables in the `.env` file.

4. **Set up the database**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   ├── components/      # React components
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
├── lib/                 # Utility functions
├── prisma/              # Database schema
├── public/              # Static assets
├── types/               # TypeScript types
└── README.md
```

## 🎯 Usage

1. **Generate Quotes**: Click the "Generate Quote" button to get random inspirational quotes
2. **Save Favorites**: Save quotes you love to your personal collection
3. **Browse Categories**: Explore quotes by different categories and authors
4. **Share**: Share your favorite quotes on social media platforms
5. **Dark Mode**: Toggle between light and dark themes

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push database schema
- `pnpm db:studio` - Open Prisma Studio

## 📊 API Endpoints

- `GET /api/quotes` - Get random quotes
- `GET /api/quotes/[id]` - Get specific quote
- `POST /api/quotes` - Create new quote
- `GET /api/quotes/category/[category]` - Get quotes by category
- `GET /api/user/favorites` - Get user's favorite quotes
- `POST /api/user/favorites` - Add quote to favorites

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

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

- GitHub: [@MusabSarmad](https://github.com/musabsarmadmir)

## 🙏 Acknowledgments

- [Quotable API](https://quotable.io/) for quote data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting

---

⭐ Star this repository if you find it helpful!
