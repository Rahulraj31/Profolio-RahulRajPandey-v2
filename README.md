# Rahul Raj Pandey - Professional Portfolio

A modern, high-performance professional portfolio built with **React**, **Vite**, and **Tailwind CSS**. This portfolio is designed to be content-driven, using a YAML configuration for easy updates without touching the code.

**Live Website:** [https://rahulraj31.vercel.app/](https://rahulraj31.vercel.app/)



## 🚀 Key Features

- **YAML-Driven Content:** All text, skills, experience, and project data are managed via `/public/portfolio.yaml`.
- **Modern UI/UX:** Clean, dark-themed aesthetic with "glassmorphism" effects.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Interactive Elements:** Smooth animations using `framer-motion` and glowing hover effects.
- **Fast Performance:** Built with Vite for near-instant load times.
- **Easy Deployment:** Optimized for Vercel and other modern hosting platforms.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (motion/react)
- **Data Parsing:** js-yaml

## 📂 Project Structure

```text
├── public/
│   ├── portfolio.yaml      # Main content configuration (Edit this!)
│   └── profile.jpg         # Profile image
├── src/
│   ├── components/         # Reusable UI components
│   ├── App.tsx             # Main application logic
│   ├── index.css           # Global styles & Tailwind imports
│   └── types.ts            # TypeScript interfaces
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## ⚙️ Local Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` (or the port shown in your terminal).

## 📝 Customization

You don't need to touch the React code to update your profile. Simply edit the `/public/portfolio.yaml` file:

```yaml
fullName: "Rahul Raj Pandey"
shortRole: "7x Google Cloud Architect"
headline: "AI/ML Engineer & Cloud Engineer..."
bio: "Cloud Solution Engineer dedicated to building scalable..."
# ... update skills, experience, and contact info
```

### Profile Image
Replace `/public/profile.jpg` with your own photo. Ensure the filename matches the `profileImage` field in `portfolio.yaml`.

## 🚢 Deployment (Vercel)

This project is optimized for Vercel:

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Vercel will automatically detect Vite settings.
4. Set the build command to `npm run build` and output directory to `dist`.
5. Deploy!

---

Developed with ❤️ by [Rahul Raj Pandey](https://github.com/Rahulraj31)
