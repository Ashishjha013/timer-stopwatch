# Timer & Stopwatch

**Time is ticking. At least now it looks good.**

A minimal, dark-themed Timer & Stopwatch built with React, TypeScript, and Vite. Designed with a glowing hot-red aesthetic, smooth circular indicators, and a focused interface that keeps things simple.

<p align="center">
  <a href="https://timer-stopwatch-gamma.vercel.app/">
    <strong>Live Demo ↗</strong>
  </a>
  &nbsp; · &nbsp;
  <a href="https://github.com/Ashishjha013/timer-stopwatch">
    <strong>Source Code</strong>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Fast-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Deployed on Vercel" />
</p>

---

## Preview

<p align="center">
  <a href="https://timer-stopwatch-gamma.vercel.app/">
    <img src="screenshots/timer-stopwatch-preview.png" alt="Timer and Stopwatch application preview" width="100%" />
  </a>
</p>

<p align="center">
  <sub>A focused workspace for tracking time, one second at a time.</sub>
</p>

## Features

### Timer

- **Custom duration** — Set your preferred countdown time.
- **Quick adjustments** — Add 30 seconds, 1 minute, or 5 minutes.
- **Playback controls** — Start, pause, and reset the countdown.
- **Circular progress** — Follow the remaining time visually.
- **Audible alarm** — Get notified when the countdown reaches zero.
- **Live tab title** — See the remaining time in your browser tab.

### Stopwatch

- **Centisecond precision** — Track elapsed time down to hundredths of a second.
- **Playback controls** — Start, pause, and reset with ease.
- **Animated indicator** — Follow the glowing indicator around the circular ring.

### Interface

- Deep-black background with glowing red accents.
- Minimal controls and focused typography.
- Responsive layout for different screen sizes.
- Smooth visual feedback and circular time indicators.
- Dedicated Timer and Stopwatch views.

## Tech Stack

| Technology    | Purpose                                     |
| ------------- | ------------------------------------------- |
| React 19      | Component-based user interface              |
| TypeScript    | Type safety and maintainable code           |
| Vite          | Development server and production builds    |
| CSS           | Styling, animations, and responsive layouts |
| Web Audio API | Timer alarm                                 |
| pnpm          | Package management                          |
| Vercel        | Deployment and hosting                      |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Ashishjha013/timer-stopwatch.git
```

**2. Navigate to the project directory**

```bash
cd timer-stopwatch
```

**3. Install dependencies**

```bash
pnpm install
```

**4. Start the development server**

```bash
pnpm dev
```

Open the local URL displayed in your terminal.

### Production Build

Build the application for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```text
timer-stopwatch/
├── public/
├── screenshots/
│   ├── timer-stopwatch-preview.png
│   └── workspace-view.png
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
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Development Highlights

Building this project helped me explore:

- Managing component state with React Hooks.
- Using `useEffect` for timer intervals and effect cleanup.
- Passing data and event handlers through component props.
- Separating application logic from UI presentation.
- Using TypeScript with React components.
- Creating circular indicators with CSS and SVG.
- Working with browser audio through the Web Audio API.
- Building and deploying a frontend application with GitHub and Vercel.

## Deployment

The application is deployed on **Vercel** and connected to its GitHub repository.

**Live application:**
https://timer-stopwatch-gamma.vercel.app/

Changes pushed to the configured production branch trigger a new deployment automatically.

## Screenshots

<p align="center">
  <img src="screenshots/workspace-view.png" alt="Timer and Stopwatch project in Visual Studio Code" width="100%" />
</p>

<p align="center">
  <sub>The development workspace behind the project.</sub>
</p>

## Author

**Ashish Jha**

Aspiring backend engineer learning through hands-on projects, experimentation, and continuous improvement.

- [GitHub Profile](https://github.com/Ashishjha013)
- [Project Repository](https://github.com/Ashishjha013/timer-stopwatch)
- [Live Demo](https://timer-stopwatch-gamma.vercel.app/)

---

<p align="center">
  <sub>Built with React, TypeScript, and attention to detail. ❤️‍🔥</sub>
</p>
