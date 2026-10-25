<div align="center">

# Timer & Stopwatch

**A focused timekeeping app with a minimal interface and a vivid red glow.**

Built with React, TypeScript, and Vite.

[**Live Demo ↗**](https://timer-stopwatch-gamma.vercel.app/) · [Source Code](https://github.com/Ashishjha013/timer-stopwatch)

![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployed-on%20Vercel-black?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Preview

<p align="center">
  <a href="https://timer-stopwatch-gamma.vercel.app/">
    <img src="screenshots/timer-stopwatch-preview.png" alt="Timer and Stopwatch app preview" width="720" />
  </a>
</p>

A small project built around one idea: make timing something feel simple, clear, and satisfying.

## Under the Hood

<p align="center">
  <img src="screenshots/workspace-view.png" alt="Development workspace showing the Timer & Stopwatch component structure and styling" width="900" />
</p>

The interface is organized into focused React components for the timer, stopwatch, header, and tab controls. This keeps the UI easier to understand and gives each part a clear responsibility.

## Features

| Timer                                   | Stopwatch                          |
| --------------------------------------- | ---------------------------------- |
| Set a custom countdown duration         | Track elapsed time to centiseconds |
| Start, pause, and reset                 | Start, pause, and reset            |
| Add 30 seconds, 1 minute, or 5 minutes  | Follow the animated ring indicator |
| Circular countdown progress             | Live elapsed-time display          |
| Audible alarm when time runs out        | —                                  |
| Remaining time shown in the browser tab | —                                  |

**Interface:** Dark theme, hot-red accents, subtle glow, responsive layout, and focused controls.

## Tech Stack

- **React** — component-based UI and state management
- **TypeScript** — safer, more maintainable code
- **Vite** — development server and production bundling
- **CSS** — responsive styling, animations, and visual effects
- **Web Audio API** — timer alarm

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Ashishjha013/timer-stopwatch.git
cd timer-stopwatch
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open the local URL printed in your terminal.

### 4. Create a production build

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```text
timer-stopwatch/
├── public/
├── src/
│   ├── assets/
│   │   ├── stopwatch.png
│   │   └── timer.png
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── StopwatchPanel.tsx
│   │   ├── TabButton.tsx
│   │   ├── Tabs.tsx
│   │   └── TimerPanel.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

## What I Practised

This project helped me put React concepts into practice:

- Managing UI state with React Hooks
- Using effects and cleanup for interval-based behavior
- Passing data and event handlers through props
- Keeping timer behavior organized across components
- Using TypeScript in a React application
- Building responsive UI with custom CSS
- Shipping updates through GitHub and Vercel

## Deployment

The app is hosted on **Vercel** and connected to GitHub. Pushes to the production branch can trigger a new deployment automatically.

**[Open the live app →](https://timer-stopwatch-gamma.vercel.app/)**

## Author

**Ashish Jha** · [GitHub](https://github.com/Ashishjha013)

Learning by building practical projects, understanding the details, and improving one iteration at a time.

---

<div align="center">

Made with React, TypeScript, and attention to detail.

</div>
