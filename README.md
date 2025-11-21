# 🎬 Premiere Night — React Native Movie Discovery App

Premiere Night is a cross-platform mobile application built with **React Native**, enabling users to explore popular movies, view detailed metadata, and save films to a persistent watchlist. This project was developed as part of a technical challenge and reflects production-quality structure, clean code, and modular architecture.

---

## 🚀 Features

- Home screen with responsive movie grid (2–3 columns depending on screen width)
- Integration with **The Movie Database (TMDB) API**
- Movie detail screen with metadata, ratings, poster rendering and fallback assets
- Persistent watchlist using **Zustand + AsyncStorage**
- Error handling and offline fallback (cached initial list)
- Search functionality using TMDB query API
- Navigation using React Navigation (stack + tabs)
- Dark theme with consistent typography + theming (React Native Paper + Styled Components)
- Portrait-only orientation (iOS & Android)

---

## 🛠️ Tooling & Prerequisites

### **Core Technologies**

- React Native (0.82.1)
- TypeScript
- Zustand (state management)
- React Native Paper (UI components)
- Styled Components
- React Navigation v6
- TMDB API

### **System Requirements**

- Node.js ≥ 20
- Yarn or npm
- Xcode (for iOS)
- Android Studio (for Android)
- TMDB API Access Token (Bearer)

### **Environment Variables (.env)**

Replace YOUR_TOKEN_HERE in `.env` file in project root to your TMDB API Token
