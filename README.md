# StoryShort.ai 🎬

Create viral faceless videos on Auto-Pilot with AI-powered video generation.

## ✨ Features

- **AI-Powered Video Creation**: Generate scripts, scenes, voiceovers, and renders automatically
- **Faceless Video Generation**: Create engaging content without showing faces
- **Ultra-Fast Processing**: Turn prompts into videos in minutes
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Grid Background**: Animated dot grid background inspired by Aceternity UI
- **Framer Motion**: Smooth animations and transitions throughout

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd storyshort-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **React**: 19.x
- **Styling**: TailwindCSS 4.x
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Typography**: Geist Font
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
storyshort-main/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── site/              # Site-specific components
│   │   ├── hero.tsx       # Hero section
│   │   ├── navbar.tsx     # Navigation
│   │   ├── gallery.tsx    # Video gallery
│   │   ├── capabilities.tsx # Features showcase
│   │   ├── footer.tsx     # Footer
│   │   ├── animated-grid.tsx # Animated background
│   │   └── sections/      # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities
├── public/               # Static assets
└── styles/              # Additional styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue accent color for CTAs and highlights
- **Background**: Dark theme with subtle gradients
- **Text**: High contrast text with muted variants
- **Borders**: Subtle borders with transparency

### Typography
- **Headings**: Geist font, bold weights
- **Body**: Geist font, regular weights
- **Sizes**: Responsive typography scale

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Grid Animation**: Animated dot grid background
- **Hover Effects**: Subtle scale and glow effects

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Dependencies
npm install          # Install dependencies
npm audit fix        # Fix security vulnerabilities
```

### Adding New Components

1. Create component in `components/site/` or `components/ui/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Add Framer Motion animations where appropriate
5. Ensure responsive design

### Styling Guidelines

- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Use CSS variables for theme colors
- Maintain consistent spacing scale
- Add hover and focus states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Manual Build

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Common Issues

1. **Dependency Conflicts**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Build Errors**
   ```bash
   npm run lint
   npm run build
   ```

3. **Image Loading Issues**
   - Ensure images are in the `public/` directory
   - Check image paths and extensions
   - Verify Next.js image optimization settings

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review existing issues

---

Built with ❤️ using Next.js, React, and TailwindCSS