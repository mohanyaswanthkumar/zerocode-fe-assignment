# ZeroCode Frontend Engineer Assignment

A production-ready chatbot web application built with React, TypeScript, Tailwind CSS, and JWT-based authentication. Features include real-time messaging, auto-scroll, input history, loading indicators, voice input (Web Speech API), and chat export.

## Features
- **Authentication**: JWT-based login/register using `localStorage`.
- **Chat Interface**: Real-time messaging with rule-based bot responses, auto-scroll, input history, and loading indicators.
- **Styling**: Tailwind CSS with light/dark mode toggle.
- **Bonus Features**: Voice input via Web Speech API, chat export to `.txt`.
- **Code Quality**: TypeScript, ESLint, Prettier.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/mohanyaswanthkumar/zerocode-fe-assignment
   cd zerocode-fe-assignment


Install dependencies:npm install


Run the development server:npm run dev


Open http://localhost:3000 in your browser.
Test credentials:
Email: test@zerocode.com
Password: Test123!



Build and Deploy

Build for production:npm run build


Preview production build:npm run preview


Deploy to Vercel:
Connect your GitHub repo to Vercel.
Set root directory to . and build command to npm run build.
Access at https://zerocode-fe-assignment.vercel.app.



Screenshots

Login: screenshots/login.png
Register: screenshots/register.png
Chat: screenshots/chat.png
Architecture Diagram: screenshots/architecture-diagram.png

Project Structure

src/components/: React components (Login.tsx, Register.tsx, Chat.tsx, ErrorBoundary.tsx).
src/contexts/: Authentication context (AuthContext.tsx).
src/types/: TypeScript types (speech-recognition.ts, types.ts).
src/App.tsx: Main app with routing and theme toggle.
src/index.css: Tailwind CSS styles.
src/main.tsx: App entry point with AuthProvider and ErrorBoundary.

Technologies

React 18, TypeScript, Tailwind CSS
React Router, Vite
Web Speech API, localStorage for JWT
ESLint, Prettier

Notes

Voice input requires Chrome for Web Speech API support.
Chatbot uses a rule-based system for responses (dummy backend).
Deployment tested on Vercel with provided credentials.

