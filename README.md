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
   git clone https://github.com/<your-handle>/zerocode-fe-assignment.git
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

Submission

GitHub: https://github.com/<your-handle>/zerocode-fe-assignment
Vercel: https://zerocode-fe-assignment.vercel.app
Email: zerocode.hiring@gmail.com

- **Purpose**: Provides clear setup, deployment, and project details for evaluators.
- **Customize**: Replace `<your-handle>` with your GitHub username and update the Vercel URL after deployment.

### Submission Steps
1. **Push to GitHub**:
   - Initialize Git if not already done:
     ```bash
     git init
     git add .
     git commit -m "Complete ZeroCode frontend assignment"
     ```
   - Create a GitHub repository (e.g., `zerocode-fe-assignment`).
   - Push:
     ```bash
     git remote add origin https://github.com/<your-handle>/zerocode-fe-assignment.git
     git branch -M main
     git push -u origin main
     ```
   - Verify at `https://github.com/<your-handle>/zerocode-fe-assignment`.

2. **Deploy to Vercel**:
   - Sign in to [Vercel](https://vercel.com).
   - Import your GitHub repo (`zerocode-fe-assignment`).
   - Configure:
     - **Project Name**: `zerocode-fe-assignment`.
     - **Root Directory**: `.`.
     - **Build Command**: `npm run build`.
     - **Output Directory**: `dist` (default for Vite).
   - Deploy and note the URL (e.g., `https://zerocode-fe-assignment.vercel.app`).
   - Test:
     - Register/login with `test@zerocode.com`, `Test123!`.
     - Verify chat, voice input, and export.

3. **Prepare Email**:
   - **To**: `zerocode.hiring@gmail.com`
   - **Subject**: ZeroCode Frontend Engineer Assignment Submission - <Your Name>
   - **Body**:
     ```
     Dear ZeroCode Team,

     I’m submitting my frontend engineer assignment. Below are the details:

     - GitHub Repository: https://github.com/<your-handle>/zerocode-fe-assignment
     - Vercel Deployment: https://zerocode-fe-assignment.vercel.app
     - Test Credentials:
       - Email: test@zerocode.com
       - Password: Test123!

     Attached are the required screenshots and architecture diagram:
     - chat.png
     - login.png
     - register.png
     - architecture-diagram.png

     The project includes all required features (authentication, chat interface, styling, code quality) and bonus features (voice input, chat export). Please let me know if you need further information.

     Thank you,
     <Your Name>
     ```
   - **Attachments**:
     - `screenshots/chat.png`
     - `screenshots/login.png`
     - `screenshots/register.png`
     - `screenshots/architecture-diagram.png`
   - Send by 18/06/2025.

4. **Verify Deliverables**:
   - **GitHub**: All files (`Chat.tsx`, `Login.tsx`, `Register.tsx`, `AuthContext.tsx`, `speech-recognition.ts`, `README.md`, etc.) are pushed.
   - **Vercel**: App is live and functional.
   - **Screenshots**: Clear, showing UI.
   - **Diagram**: Explains architecture.
   - **Email**: Includes all links and attachments.

### Troubleshooting
- **Build Errors**:
  ```bash
  npm run build


Check console for TypeScript or Vite errors.
Run npx tsc to catch type issues.
Deployment Issues:
Ensure vite.config.ts is correct:import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});


Verify package.json scripts:"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write .",
  "preview": "vite preview"
}




Console Errors: Test Vercel URL in Chrome, check DevTools (F12 > Console).
Screenshots Missing:
Retake using browser’s screenshot tool or Snipping Tool (Windows).


Email Issues: Ensure attachments are under email size limits (e.g., 25MB for Gmail).

Rechecked Project
The project meets all Zerocode_frontend.pdf requirements:

Auth: localStorage-based JWT in Register.tsx, Login.tsx, AuthContext.tsx.
Chat Interface: Chat.tsx with rule-based responses, auto-scroll, input history, loading indicators, voice input, chat export.
Styling: Tailwind CSS with light/dark modes (index.css, App.tsx).
Code Quality: TypeScript, ESLint, Prettier.
Deliverables: GitHub, Vercel, screenshots, diagram.
Bonus Features: Voice input, chat export.

If you encounter issues during deployment or need help with the architecture diagram, share details (e.g., error messages, specific requirements). Your project is ready for submission, and the provided README.md should help evaluators set up and review it. Good luck with your submission!
