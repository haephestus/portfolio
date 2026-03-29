// projects-data.js — add all your projects here
export const projects = [
  {
    id: "pixelparty",
    title: "PixelParty — OnTheButton Esports",
    summary:
      "Full-stack esports aggregator with async scraping, live data pipelines, and automated CI/CD.",
    description: `
      The Build: A high-performance statistics engine for tracking live tournament data. 
      
      The Tech: Built with FastAPI and asyncpg for non-blocking database operations. The backend manages a normalized PostgreSQL schema that resolves player identities across multiple gaming platforms. 

      The Data: Custom Playwright scrapers handle dynamic DOM traversal and JS-rendered content from various providers. Nightly APScheduler jobs manage the full tournament lifecycle, using an incremental enrichment strategy that cut processing time by 60%.

      The Ops: Fully containerized via multi-stage Dockerfiles and deployed on Railway with automated CI/CD. Secured using HMAC-signed tokens and strict CORS middleware.
    `,
    tags: ["FastAPI", "Postgres", "Playwright", "Docker", "Railway", "Python"],
    image: "/image/projects/onthebutton.png",
    date: "2026",
    github: "https://onthebutton.up.railway.app",
  },
  {
    id: "cerebrum",
    title: "Cerebrum",
    summary:
      "RAG-powered intelligence tool for local document interrogation using LangChain and LLMs.",
    description: `
      The Build: A private Retrieval Augmented Generation (RAG) tool designed to run on consumer-grade hardware without leaking data to the cloud.

      The Tech: Built on a FastAPI backbone with a Flutter frontend. It uses LangChain to orchestrate document embeddings and similarity searches against local LLMs. 

      The Goal: To prove that intelligent document querying doesn't require enterprise-scale infrastructure. Successfully shipped an unfamiliar tech stack as a solo dev.
    `,
    tags: ["Python", "LangChain", "FastAPI", "Flutter", "RAG", "LLMs"],
    image: "/image/projects/cerebrum.jpg",
    date: "2024",
    github: "https://github.com/haephestus/cerebrum",
  },
  {
    id: "simple-shell",
    title: "Simple Shell",
    summary:
      "Unix-like command-line interpreter built in C, interfacing directly with the Linux kernel.",
    description: `
      The Build: A functional command-line shell that replicates core Unix behavior.

      The Tech: Written in C using low-level system calls. Implements process management (fork/exec), input parsing, and environment handling.

      The Why: Deep-dive into systems programming and kernel interaction. Built to understand exactly how an OS manages I/O and process lifecycles at the hardware level.
    `,
    tags: ["C", "Unix", "Systems Programming", "OS"],
    image: "/image/projects/shell.png",
    date: "2024",
    github: "https://github.com/haephestus/simple_shell",
  },
  {
    id: "immersive-health",
    title: "ImmersiveHealth",
    summary:
      "Minecraft technical mod implementing biology-based health mechanics and custom UI.",
    description: `
      The Build: A total overhaul of the Minecraft health system, replacing arcade mechanics with biology-inspired wellness logic.

      The Tech: Developed in Java for the Forge/NeoForge API. The mod hooks into the game’s event bus to dynamically update player attributes based on nutrition, injury, and environment.

      The Result: A modular health system with custom-rendered HUD elements that shifts gameplay from reactive eating to intentional health management.
    `,
    tags: ["Java", "Minecraft", "Modding", "UI/UX"],
    image: "/image/projects/immersivehealth.png",
    date: "2024",
    github: "https://github.com/haephestus/ImmersiveHealth",
  },
  {
    id: "timely",
    title: "Timely",
    summary:
      "Neuroscience-based time blocker focused on cognitive load and deep work.",
    description: `
      The Build: A productivity app that replaces the "infinite to-do list" with finite time blocks.

      The Tech: Built with Flutter and Dart for a clean, cross-platform mobile experience. 

      The Strategy: Designed around neuroscience principles of "chunking" to minimize decision fatigue. The UI forces users to be intentional with their time rather than reactive, utilizing local persistence for fast, offline-first performance.
    `,
    tags: ["Flutter", "Dart", "UX", "Productivity", "Mobile"],
    image: "/image/projects/timely.png",
    date: "2024",
    github: "https://github.com/haephestus/timely",
  },
];
