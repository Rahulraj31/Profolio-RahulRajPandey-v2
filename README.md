# Rahul Raj Pandey - Professional Portfolio 

A high-performance, modern professional portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS 4**. This project is completely content-driven via a YAML configuration, allowing for instant updates to experience, skills, and certifications without modifying the React architecture.

**Live Website:** [https://rahulraj31.vercel.app/](https://rahulraj31.vercel.app/)

---

## 🚀 Key Features

- **YAML-Driven Architecture:** All content (skills, experience, projects, contact) is managed via `/public/portfolio.yaml`.
- **GCP & AI Focused:** Highlighting expertise as a 7x Google Cloud Architect and AI/ML Engineer.
- **Modern UI/UX:** Premium dark-themed aesthetic with Glassmorphism, hardware-accelerated animations, and responsive layouts.
- **Interactive Elements:** Smooth transitions using `motion/react` (Framer Motion v12) and dynamic glowing hover effects.
- **Tailwind 4 Engine:** Utilizing the latest performance-first CSS engine for ultra-fast styling.
- **Performance Optimized:** Near-instant load times powered by Vite.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (`motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Parsing:** [js-yaml](https://github.com/nodeca/js-yaml)
- **Content:** YAML (Static data loading)

## 📂 Project Structure

```text
├── public/
│   └── portfolio.yaml      # Main content configuration (Edit this!)
├── src/
│   ├── components/         # Modular UI components (Navbar, Hero, Section, etc.)
│   ├── assets/             # Local assets (profile.jpeg, styles)
│   │   └── profile.jpeg    # Your Profile image
│   ├── App.tsx             # Root application logic & data fetching
│   ├── index.css           # Tailwind 4 configuration & global styles
│   ├── types.ts            # TypeScript interfaces for portfolio data
│   └── main.tsx            # Application entry point
├── package.json            # Modern dependencies (React 19, etc.)
└── vite.config.ts          # Optimized Vite build settings
```

## ⚙️ Local Setup

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rahulraj31/Profolio-RahulRajPandey-v2.git
   cd Profolio-RahulRajPandey-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Navigate to:** `http://localhost:3000`

## 📝 Customization

### 1. Update Content
The portfolio is designed for ease of use. Simply edit the `/public/portfolio.yaml` file:

```yaml
fullName: "Rahul Raj Pandey"
shortRole: "7x Google Cloud Architect"
headline: "AI/ML Engineer & Cloud Engineer..."
bio: "Cloud Solution Engineer dedicated to building scalable..."
# ... update your skills, experience, and certifications
```

### 2. Profile Image
Replace your photo at `src/assets/profile.jpeg`. The application imports this directly to ensure it works correctly with the Vite build pipeline.

## 🚢 Deployment

Optimized for **Vercel** and **GitHub Pages**:
1. Connect your repository.
2. Build command: `npm run build`
3. Output directory: `dist`

---

Developed with 💙 by [Rahul Raj Pandey](https://github.com/Rahulraj31)
