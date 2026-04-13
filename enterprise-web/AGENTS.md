# AGENTS.md - Development Guide for AI Agents

## Project Overview

This is a Next.js 16.2.2 web application using the App Router, TypeScript, and Tailwind CSS v4. The project is a Chinese-language marketing website for laser cutting/engraving equipment.

## IMPORTANT: Next.js 16 Breaking Changes

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Heed deprecation notices.

---

## Build/Lint/Test Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000

# Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint on all files
```

**Note:** There are no test dependencies configured. Do not write tests unless explicitly requested.

---

## Code Style Guidelines

### Imports

- Use ES module syntax with named imports
- Order: React/Next imports → third-party → local components
- Always import types explicitly using `import type` when only used as types
- Use absolute imports from `@/` for project files (configured in tsconfig.json)

```typescript
// Good
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NextConfig } from "next";
import Header from "@/components/Header";

// Bad
import * as React from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
```

### Formatting

- Use Prettier defaults (2 spaces indentation)
- Use double quotes for strings in JavaScript/TypeScript
- Use semicolons at the end of statements
- Use Tailwind CSS utility classes for styling (v4 syntax)
- Use Tailwind CSS variables and `@theme` for custom colors/fonts

```typescript
// Tailwind v4 syntax - avoid @apply, use utility classes
<div className="bg-primary-500 text-white">
// NOT: <div className={styles.container}>
```

### Types

- Use TypeScript for all files (.ts/.tsx)
- Use explicit return types for exported functions
- Define interfaces for component props
- Use `type` for unions/intersections, `interface` for object shapes

```typescript
interface NavItem {
  name: string;
  href: string;
}

interface Product {
  name: string;
  description: string;
  image: string;
  category: string;
}
```

### Naming Conventions

- **Files**: Use kebab-case for config files, PascalCase for components, camelCase for utilities
- **Components**: PascalCase (e.g., `Header.tsx`, `Footer.tsx`)
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS classes**: Tailwind utility classes

### Error Handling

- Use React error boundaries for component errors
- Handle null/undefined states explicitly
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- No try/catch needed for async components in App Router (use `error.tsx`)

### File Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── products/         # Products page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/            # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
└── styles/               # Global styles (if needed)
```

### Component Patterns

- Use `"use client"` directive only when hooks (useState, useEffect, etc.) are needed
- Use functional components with arrow functions or function keyword
- Define component props with interface
- Place client components in separate files from server components

```typescript
// Server component (default)
export default function Home() { ... }

// Client component
"use client";

export default function Header() {
  const [state, setState] = useState(false);
  ...
}
```

### Next.js Specific

- Use `next/image` for images with fill, alt, and className props
- Use `next/link` instead of `<a>` tags
- Use `next/font` for fonts
- Configure images in `next.config.ts` for external domains
- Use Server Components by default, add `"use client"` only when needed

---

## Running a Single Test

No test framework is configured. If tests are added later:

```bash
# Jest (if configured)
npm test -- --testPathPattern=filename

# Vitest (if configured)
npm run test -- filename
```

---

## Common Issues to Avoid

1. **Next.js 16 differences**: Check `node_modules/next/dist/docs/` for v16-specific changes
2. **Tailwind v4**: Do not use `@tailwind` directives, use CSS `@import "tailwindcss"`
3. **Client/server boundaries**: Keep server components as default, only use client when needed
4. **Image optimization**: Always include `alt` prop and proper sizing
5. **Chinese content**: This project uses Chinese (Simplified) for all user-facing content
