# Rahul Gupta - Developer Portfolio 2025-26

A modern, high-end developer portfolio website featuring immersive visuals, cinematic animations, and adaptive light/dark themes. Built with the latest web technologies following 2025-26 design trends.

> **🚀 New to this project?** Start here: **[QUICK-START.md](./QUICK-START.md)** or browse all docs: **[INDEX.md](./INDEX.md)**

## ✨ Features

- 🌗 **Adaptive Theme System** - Smooth light/dark mode transitions with persistent preferences
- 🎨 **Cinematic Animations** - Framer Motion powered animations and transitions
- 🎯 **3D Particle Effects** - Interactive canvas-based particle system
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Next.js 15 for blazing fast performance
- 🎭 **Glassmorphism UI** - Modern glass-card design with gradient accents
- 🚀 **SEO Optimized** - Meta tags and OpenGraph support

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion
- **3D Graphics:** Three.js / React Three Fiber
- **Icons:** Lucide React
- **Theme:** next-themes
- **Language:** TypeScript

## 📋 Sections

1. **Hero** - Immersive introduction with floating animations
2. **About** - Personal story and expertise
3. **Skills** - Categorized skill cards with hover effects
4. **Projects** - Portfolio showcase with live demos
5. **Experience** - Professional timeline
6. **Contact** - Interactive contact form
7. **Footer** - Links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Adding Your Photo

1. Place your image in `/public/images/`
2. Update the image path in:
   - `components/Hero.tsx` (line ~155)
   - `components/About.tsx` (line ~40)

### Updating Content

- **Personal Info:** Edit constants in each component file
- **Projects:** Modify the `projects` array in `components/Projects.tsx`
- **Experience:** Update the `experiences` array in `components/Experience.tsx`
- **Skills:** Edit the `skills` array in `components/Skills.tsx`
- **Contact Info:** Update links and details in `components/Contact.tsx`

### Theme Colors

Customize colors in `tailwind.config.ts`:
- Dark mode colors: `colors.dark.*`
- Light mode colors: `colors.light.*`

## 📦 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Other Platforms

- **Netlify:** Connect GitHub repo and deploy
- **Railway:** Deploy with automatic HTTPS
- **AWS/Azure:** Use Next.js standalone output

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

\`\`\`env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_SITE_URL=https://yoursite.com
\`\`\`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahul Gupta**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Rahul Gupta](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Inspired by Dragonfly.xyz and Apple Developer aesthetics
- Particle system inspired by various WebGL experiments
- Design trends from Awwwards and CSS Design Awards

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
