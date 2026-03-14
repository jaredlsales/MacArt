# MacArt

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)

🌐 **Visit the website:** [macart.devjaredsales.com](https://macart.devjaredsales.com)

## 📖 About the Project

**MacArt** is the online showcase of a handicraft atelier that values handmade, exclusive, and personalized work. Here you will find:

- **Women's kitchen aprons** – unique models to add charm and protection while cooking.
- **Layette and household linens** – delicate pieces for babies, weddings, and special gifts.
- **Personalized souvenirs** – small works of art that immortalize moments.

The platform was developed to present the products elegantly and facilitate contact with customers, reflecting the care and dedication put into each piece.

---

## ✨ Features

- Responsive and modern interface
- Page navigation (React Router)
- Vector icons (Lucide React)
- Reusable components with Radix UI
- Styling with CSS
- Typed code with TypeScript
- Fast build with Vite

---

## 🛠️ Technologies Used

**Frontend**
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Radix UI](https://www.radix-ui.com/) (primitive components)
- [Lucide React](https://lucide.netlify.app/) (icons)
- [class-variance-authority](https://cva.style/) (component variants)

**Dev Tools**
- ESLint
- TypeScript ESLint
- @vitejs/plugin-react

---

## 📦 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

---

## 🔧 Installation and Execution

1. **Clone the repository**
   ```bash
   git clone https://github.com/seu-usuario/macart.git
   cd macart

2. **Install dependencies**
   ```bash
   npm install
   # ou
   yarn

3. **Start the development server
**
   ```bash
   npm run dev
   # ou
   yarn dev

Access in your browser: http://localhost:5173
  

## 📁 Folder Structure
```plaintext

macart/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Pages (Home, About, Products, Contact)
│   ├── routes/          # Route configuration
│   ├── styles/          # Global CSS files (if needed)
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 📜 Available Scripts

- **npm run dev** – starts the development server

- **npm run build** – compiles the project for production (TypeScript + Vite)

- **npm run preview** – previews the production build locally

- **npm run lint** – runs linting checks
