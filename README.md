# Vestroll Landing Waitlist Page

Welcome to the Vestroll project! This is a Next.js landing page built with TypeScript and Tailwind CSS, designed for capturing waitlist signups.

## Architecture and Folder Structure

The project follows a modular and scalable architecture to ensure clean code and easy maintenance:

### `src/` Directory Structure

- **`src/components/ui`**: Contains atomic, reusable UI components such as buttons, inputs, cards, and other primitive elements.
- **`src/components/layout`**: Houses shared layout components like the `Navbar`, `Footer`, and shared layout wrappers.
- **`src/components/sections`**: Contains page-specific sections like `Hero`, `Features`, `FAQ`, and `WaitlistForm`. This helps in keeping the main page file clean.
- **`src/lib`**: Dedicated to shared utility functions, constants, and global configurations (e.g., API clients, theme helpers).
- **`src/hooks`**: A place for custom React hooks to encapsulate shared logic across components.
- **`src/types`**: Centralized location for TypeScript interfaces, types, and enums.
- **`src/styles`**: Contains global CSS, Tailwind extensions, and font configurations.
- **`src/app`**: Uses the Next.js App Router for routing and page-level layouts.

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Running the Development Server

Start the interactive development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Utilities**: `clsx`, `tailwind-merge` for dynamic class management.
