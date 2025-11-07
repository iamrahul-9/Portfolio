# Installation Guide for Rahul's Portfolio

## Prerequisites Installation

Your system doesn't have Node.js installed yet. Follow these steps to set up your development environment:

### Step 1: Install Node.js

#### Option A: Using Homebrew (Recommended for macOS)

1. **Install Homebrew** (if not already installed):
   Open Terminal and run:
   \`\`\`bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   \`\`\`

2. **Install Node.js via Homebrew**:
   \`\`\`bash
   brew install node
   \`\`\`

3. **Verify installation**:
   \`\`\`bash
   # Installation & Quick Start

   This repository is a personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and a lightweight particle background.

   Minimal steps to get running locally:

   1) Install Node.js (LTS recommended — v18/20+)

     - macOS (Homebrew):
      ```bash
      brew install node
      ```
     - Or download and install from https://nodejs.org

   2) From the project root install dependencies:
     ```bash
     npm install
     ```

   3) Run the development server:
     ```bash
     npm run dev
     ```
     Open http://localhost:3000

   4) Build for production:
     ```bash
     npm run build
     npm start
     ```

   Notes & Useful Info
   - Your headshot and resume HTML are served from `public/` as `/images/rahul-gupta.jpg` and `/resume.html`.
   - Edit content in `components/` (Hero, About, Projects, Experience, Contact) to personalize text and project links.
   - Theme support is provided by `next-themes`. Toggle and preferences persist across visits.
   - If Tailwind reports an `@apply` error, it usually means the applied utility doesn't exist in your Tailwind config — prefer Tailwind utilities or bracket arbitrary values like `bg-[#fdfdfd]`.
   - Recommended workflow for updates:
     1. Create a feature branch.
     2. Edit the component(s) and test locally with `npm run dev`.
     3. Commit and push, then deploy (Vercel auto-detects Next.js projects).

   Contact & Links
   - Email: rahulbgupta24@gmail.com
   - GitHub: https://github.com/iamrahul-9
   - LinkedIn: https://www.linkedin.com/in/rahul-gupta-7b528718b/

   If you'd like I can further prune or expand this single README/INSTALL file to include deployment steps (Vercel, custom domains), environment variables, or CI/CD notes — tell me which you'd prefer.
After dependencies are installed:

\`\`\`bash
npm run dev
\`\`\`

Your portfolio will be available at: **http://localhost:3000**

## Quick Start Commands

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
\`\`\`

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   ├── Experience.tsx       # Work experience timeline
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero/landing section
│   ├── ParticleBackground.tsx  # Animated particle system
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills grid
│   ├── ThemeProvider.tsx    # Theme context provider
│   └── ThemeToggle.tsx      # Light/dark mode toggle
├── public/
│   └── images/              # Place your images here
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.ts           # Next.js configuration
\`\`\`

## Customization Guide

### 1. Add Your Personal Photo

Place your image in the \`public/images/\` folder (create it if it doesn't exist):

\`\`\`bash
mkdir -p public/images
# Copy your photo to public/images/rahul-gupta.jpg
\`\`\`

Then update these files:

**Hero.tsx** (around line 155):
\`\`\`tsx
// Uncomment and update:
<Image
  src="/images/rahul-gupta.jpg"
  alt="Rahul Gupta"
  fill
  className="object-cover"
  priority
/>
\`\`\`

**About.tsx** (around line 40):
\`\`\`tsx
<Image 
  src="/images/about.jpg" 
  alt="About Rahul" 
  fill 
  className="object-cover" 
/>
\`\`\`

### 2. Update Personal Information

**Contact Details** (`components/Contact.tsx`):
- Email: Line ~88
- Phone: Line ~99
- Location: Line ~110
- Social Links: Lines ~126-128

**Hero Section** (`components/Hero.tsx`):
- Update social links: Lines ~116-132
- Modify tagline: Line ~60

### 3. Customize Projects

Edit the \`projects\` array in \`components/Projects.tsx\` (starting line 8):

\`\`\`tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    tech: ["Tech", "Stack"],
    image: "🚀", // Or use image path
    github: "https://github.com/yourrepo",
    live: "https://yourdemo.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  // Add more projects...
];
\`\`\`

### 4. Update Work Experience

Edit the \`experiences\` array in \`components/Experience.tsx\` (starting line 8):

\`\`\`tsx
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    location: "Location",
    description: "Job description",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // Add more experiences...
];
\`\`\`

### 5. Modify Skills

Update the \`skills\` array in \`components/Skills.tsx\` (starting line 8).

### 6. Customize Theme Colors

Edit \`tailwind.config.ts\` to change color schemes:

\`\`\`typescript
colors: {
  dark: {
    bg: "#0a0a0a",      // Dark mode background
    // ... other colors
  },
  light: {
    bg: "#fdfdfd",      // Light mode background
    // ... other colors
  },
}
\`\`\`

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with zero configuration

### Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect repository and deploy

### Other Platforms
- **Railway**: Railway.app
- **Render**: Render.com
- **AWS Amplify**: aws.amazon.com/amplify
- **Cloudflare Pages**: pages.cloudflare.com

## Troubleshooting

### Port Already in Use
\`\`\`bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
# Or use a different port
npm run dev -- -p 3001
\`\`\`

### Module Not Found Errors
\`\`\`bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## Performance Tips

1. **Optimize Images**: Use WebP format and Next/Image component
2. **Lazy Loading**: Components load as needed
3. **Code Splitting**: Automatic with Next.js
4. **Caching**: Configured for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Review [Framer Motion Guide](https://www.framer.com/motion/)

---

**Happy coding! 🚀**
