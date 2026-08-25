# 🌐 Daham Prabhasara — Developer & Designer Portfolio

A modern, high-performance, and visually stunning personal portfolio website built with React, Vite, and Framer Motion. This site showcases professional experience, education, projects, current exploration areas, and features a built-in AI Assistant powered by the Google Gemini API.

---

## ✨ Features

- **🎨 Rich Aesthetics & Animations**: Sleek dark mode styling with glassmorphism, glowing accents, and smooth physics-based animations powered by **Framer Motion**.
- **🧠 Gemini AI Assistant**: An interactive chat assistant configured with site-specific context to answer questions about skills, background, and projects in real-time.
- **💼 Interactive Resume**: A structured experience timeline, categorized skill bars, and a print/download-optimized resume format.
- **💻 Dynamic Projects Grid**: Hover-interactive, 3D-tilting cards highlighting key software developments.
- **🎓 Education & Approach Layout**: Highlighting educational milestones and core development philosophies.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vite.dev/) (Client Environment)
- **Styling**: Vanilla CSS3 Custom Variables + Responsive Flexbox/Grid
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Gemini 2.0 Flash)
- **3D Elements**: [Three.js](https://threejs.org/) + [React Three Fiber](https://r3f.docs.pmnd.rs/) (Background visuals)

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
Clone the repository and run:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your Google Gemini API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Development Server
Run the local dev server:
```bash
npm run dev
```

### 4. Build for Production
Create the optimized production build:
```bash
npm run build
```

---

## 📁 Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and visual media
│   ├── components/      # React components (Navbar, Hero, About, Resume, Projects, AIAssistant, etc.)
│   ├── styles/          # Component-specific stylesheet modules
│   ├── App.jsx          # Root component orchestration
│   ├── index.css        # Global CSS variables, resets, and styles
│   └── main.jsx         # App entry point
├── vite.config.js       # Vite configuration
└── package.json         # Project manifests and scripts
```
