# Game Hub — Video Game Discovery & Exploration Platform 🎮

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.10-319795?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-1.10-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

> 🕹️ **Game Hub** is a responsive video game discovery web application built with **React**, **TypeScript**, and **Chakra UI**. It connects to the RAWG Video Games Database API, allowing users to browse, search, and filter thousands of games across genres, gaming platforms, and review scores with real-time UI feedback.

---

## ✨ Features

- **🔍 Real-Time Search:** Instant title search with URL parameter synchronization.
- **🏷️ Genre Filtering:** Browse games across RPG, Action, Strategy, Shooter, Indie, Adventure, and more.
- **🎮 Platform Selector:** Filter titles by gaming ecosystem (PC, PlayStation, Xbox, Nintendo, iOS, Android).
- **📊 Dynamic Sorting:** Sort catalog by Relevance, Date Added, Name, Release Date, Popularity, or Average Rating.
- **⚡ Loading Skeletons:** Animated placeholder skeleton cards powered by Chakra UI to eliminate layout shift during data fetching.
- **🎯 Metacritic Scores:** Highlighting critically acclaimed games with color-coded score badges (Green, Yellow, Neutral).
- **🌓 Dark & Light Theme:** Full theme toggling support with persistent preference storage.
- **🖼️ CDN Image Cropping & Optimization:** Custom media service dynamically rewriting image URLs (crop/600/400) to fetch lightweight thumbnails and accelerate page rendering.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Purpose |
|:---|:---|:---|
| **Frontend Framework** | React 19 & TypeScript | Component architecture with strict compile-time type safety |
| **UI Component Library** | Chakra UI & Emotion | Responsive layout system, accessible components, and theme styling |
| **Build & Tooling** | Vite 7 | Instant HMR and optimized production bundling |
| **HTTP & API Client** | Axios | Configured client with reusable baseURL and API key interceptors |
| **Icons & Typography** | React Icons | Multi-platform vendor icons (Windows, PlayStation, Apple, Xbox) |
| **Animations** | Framer Motion | Smooth card hover elevations and layout transitions |

---

## 📂 Project Structure

`	ext
game-hub/
├── src/
│   ├── assets/             # Logos, placeholders, and fallback images
│   ├── components/         # Reusable modular UI components
│   │   ├── ColorModeSwitch.tsx   # Dark/light mode toggle
│   │   ├── CriticScore.tsx       # Metacritic colored score badges
│   │   ├── GameCard.tsx          # Individual game card presentation
│   │   ├── GameCardContainer.tsx # Hover animations and card bounds
│   │   ├── GameCardSkeleton.tsx  # Shimmer loading skeleton
│   │   ├── GameGrid.tsx          # Responsive grid displaying filtered games
│   │   ├── GameHeading.tsx       # Dynamic page title reflecting active filters
│   │   ├── GameSort.tsx          # Order-by dropdown selector
│   │   ├── GenreList.tsx         # Sidebar genre filtering menu
│   │   ├── NavBar.tsx            # Header bar with search & theme switch
│   │   ├── PlatformIconList.tsx  # Dynamic multi-platform icon mapper
│   │   ├── PlatformSelector.tsx  # Platform filter dropdown
│   │   └── SearchInput.tsx       # Real-time search form input
│   ├── data/               # Seed genres data for instant offline rendering
│   ├── hooks/              # Custom reusable React data hooks
│   │   ├── useData.tsx           # Generic fetch hook with loading & error state
│   │   ├── useGames.tsx          # Game catalog querying with active query params
│   │   ├── useGenres.tsx         # Genre list data provider
│   │   └── usePlatform.tsx       # Platform collection provider
│   ├── services/           # External service layers
│   │   ├── api-client.ts         # Axios instance for RAWG API
│   │   └── image-url.ts          # Dynamic CDN image cropping utility
│   ├── theme.ts            # Chakra UI custom color and font tokens
│   ├── App.tsx             # Root layout orchestrating active query state
│   └── main.tsx            # Application entry point
├── package.json
└── vite.config.ts
`

---

## 🚀 Getting Started

### 1. Clone the Repository
`ash
git clone https://github.com/localmaximumx/game-hub.git
cd game-hub
`

### 2. Install Dependencies
`ash
npm install
`

### 3. Configure API Key
Create a .env file in the root directory (or update src/services/api-client.ts) with your free API key from [rawg.io](https://rawg.io/apidocs):
`env
VITE_RAWG_API_KEY=your_rawg_api_key_here
`

### 4. Start Development Server
`ash
npm run dev
`
Open http://localhost:5173 in your browser.

### 5. Build for Production
`ash
npm run build
`

---

## 👨‍💻 Author
**Biniyam Zenebe**  
GitHub: [@localmaximumx](https://github.com/localmaximumx)  
Email: benispc0@gmail.com
