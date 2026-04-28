# Project Documentation (Source + Config)

This document includes code for project source/config files, excluding Shadcn UI components and selected generated/assets paths.

## Exclusions

- `components/ui/**` (Shadcn UI components)
- `public/**`
- `package-lock.json`
- `node_modules/**`, `.next/**`, `.git/**`, `build/**`, `out/**`, `docs/**`

## Included Files

- `.vscode/settings.json`
- `AGENTS.md`
- `CLAUDE.md`
- `app/(auth)/layout.tsx`
- `app/(auth)/sign-in/page.tsx`
- `app/(auth)/sign-up/page.tsx`
- `app/(root)/ask-question/page.tsx`
- `app/(root)/collection/page.tsx`
- `app/(root)/community/page.tsx`
- `app/(root)/layout.tsx`
- `app/(root)/page.tsx`
- `app/(root)/profile/[id]/page.tsx`
- `app/(root)/tags/page.tsx`
- `app/api/auth/[...nextauth]/route.ts`
- `app/globals.css`
- `app/layout.tsx`
- `auth.config.ts`
- `auth.ts`
- `components.json`
- `components/Metric.tsx`
- `components/cards/QuestionCard.tsx`
- `components/cards/TagCard.tsx`
- `components/filters/HomeFilter.tsx`
- `components/form/AuthForm.tsx`
- `components/form/QuestionForm.tsx`
- `components/form/SocialAuthForm.tsx`
- `components/navigation/LeftSidebar.tsx`
- `components/navigation/Navbar/Index.tsx`
- `components/navigation/Navbar/MobileNavigation.tsx`
- `components/navigation/Navbar/NavLinks.tsx`
- `components/navigation/Navbar/Theme.tsx`
- `components/navigation/RightSidebar.tsx`
- `components/search/LocalSearch.tsx`
- `constants/index.ts`
- `constants/routes.ts`
- `context/Theme.tsx`
- `eslint.config.mjs`
- `hooks/use-toast.ts`
- `lib/url.ts`
- `lib/utils.ts`
- `lib/validations.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package.json`
- `postcss.config.mjs`
- `proxy.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `types/global.d.ts`

## `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
  },
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.jsxSingleQuote": false,
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "always",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.exclude": {
    "**/.vscode": true,
    "**/.next": true,
    // "**/.git": true,
    "**/.node_modules": true,
    "**/Thumbs.db": true,
    "next-env.d.ts": true
  }
}
```

## `AGENTS.md`

```md
<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
```

## `CLAUDE.md`

```md
@AGENTS.md
```

## `app/(auth)/layout.tsx`

```tsx
import SocialAuthForm from "@/components/form/SocialAuthForm";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark px-4 py-10 bg-cover bg-center bg-no-repeat">
      <section className="light-border background-light800_dark200 px-4 py-10 rounded-[10px] min-w-full sm:min-w-[520px] shadow-light100_dark100 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
```

## `app/(auth)/sign-in/page.tsx`

```tsx
"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";
// import { success } from "zod";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
};

export default SignIn;
```

## `app/(auth)/sign-up/page.tsx`

```tsx
"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SingUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
};

export default SingUp;
```

## `app/(root)/ask-question/page.tsx`

```tsx
import QuestionForm from "@/components/form/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;
```

## `app/(root)/collection/page.tsx`

```tsx
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
```

## `app/(root)/community/page.tsx`

```tsx
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
```

## `app/(root)/layout.tsx`

```tsx
import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar/Index";
import RightSidebar from "@/components/navigation/RightSidebar";

import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col justify-between px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
```

## `app/(root)/page.tsx`

```tsx
// "use client";

import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import QuestionCard from "../../components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to learn React.js?",
    description: "I want to learn React.js. Can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/auth-dark.png" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn Javascript?",
    description: "I want to learn Javascript. Can anyone help me?",
    tags: [
      { _id: "1", name: "Javascript" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/auth-dark.png" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags.some(
          (tag) => tag.name.toLowerCase() === filter.toLowerCase()
        )
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="h1-bold text-dark100_light900">Ask Questions</h1>
        <Button asChild className="primary-gradient px-4 py-3 !text-light-900">
          <Link href={ROUTES.ASK_QUESTION}>Ask Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions"
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-7 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
          // <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
```

## `app/(root)/profile/[id]/page.tsx`

```tsx
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
```

## `app/(root)/tags/page.tsx`

```tsx
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
```

## `app/api/auth/[...nextauth]/route.ts`

```ts
import { handlers } from "@/auth"; // Fixed: Direct import from unified auth.ts config
export const { GET, POST } = handlers;
```

## `app/globals.css`

```css
@import "tailwindcss";

@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-primary-100: #fff1e6;
  --color-primary-500: #ff7000;

  --color-dark-100: #000000;
  --color-dark-200: #0f1117;
  --color-dark-300: #151821;
  --color-dark-400: #212734;
  --color-dark-500: #101012;

  --color-light-400: #858ead;
  --color-light-500: #7b8ec8;
  --color-light-700: #dce3f1;
  --color-light-800: #f4f6f8;
  --color-light-850: #fdfdfd;
  --color-light-900: #ffffff;

  --color-link-100: #1da1f2;

  --radius-2: 8px;
  --radius-1_5: 6px;
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  --shadow-light-100:
    0px 12px 20px 0px rgba(184, 184, 184, 0.03),
    0px 6px 12px 0px rgba(184, 184, 184, 0.02),
    0px 2px 4px 0px rgba(184, 184, 184, 0.03);
  --shadow-light-200: 10px 10px 20px 0px rgba(218, 213, 213, 0.1);
  --shadow-light-300: -10px 10px 20px 0px rgba(218, 213, 213, 0.1);
  --shadow-dark-100: 0px 2px 10px 0px rgba(46, 52, 56, 0.1);
  --shadow-dark-200: 2px 0px 20px 0px rgba(39, 36, 36, 0.04);

  --background-image-auth-dark: url("/images/auth-dark.png");
  --background-image-auth-light: url("/images/auth-light.png");

  --breakpoint-xs: 420px;

  --font-inter: var(--font-inter);
  --font-space-grotesk: var(--font-space-grotesk);
}

/*
  The default border color has changed to `currentcolor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentcolor);
  }
}

@utility background-light850_dark100 {
  @apply bg-light-850 dark:bg-dark-100;
}

@utility background-light900_dark200 {
  @apply bg-light-900 dark:bg-dark-200;
}

@utility background-light900_dark300 {
  @apply bg-light-900 dark:bg-dark-300;
}

@utility background-light800_darkgradient {
  @apply bg-light-800 dark:dark-gradient;
}

@utility background-light800_dark400 {
  @apply bg-light-800! dark:bg-dark-400!;
  @apply bg-light-800 dark:bg-dark-400;
}

@utility background-light700_dark400 {
  @apply bg-light-700 dark:bg-dark-400;
}

@utility background-light700_dark300 {
  @apply bg-light-700 dark:bg-dark-300;
}

@utility background-light800_dark300 {
  @apply bg-light-800! dark:bg-dark-300!;
}

@utility background-light800_dark200 {
  @apply bg-light-800 dark:bg-dark-200;
}

@utility background-dark400_light900 {
  @apply dark:bg-dark-400! bg-light-900!;
}

@utility text-dark100_light900 {
  @apply text-dark-100! dark:text-light-900!;
}

@utility text-dark200_light900 {
  @apply text-dark-200 dark:text-light-900;
}

@utility text-dark200_light800 {
  @apply text-dark-200! dark:text-light-800!;
}

@utility text-dark300_light700 {
  @apply text-dark-300 dark:text-light-700;
}

@utility text-dark400_light700 {
  @apply text-dark-400 dark:text-light-700;
}

@utility text-dark500_light700 {
  @apply text-dark-500! dark:text-light-700!;
}

@utility text-dark500_light500 {
  @apply text-dark-500 dark:text-light-500;
}

@utility text-dark500_light400 {
  @apply text-dark-500 dark:text-light-400;
}

@utility text-dark300_light900 {
  @apply text-dark-300! dark:text-light-900!;
}

@utility text-dark400_light800 {
  @apply text-dark-400 dark:text-light-800;
}

@utility text-light400_light500 {
  @apply text-light-400! dark:text-light-500!;
  @apply text-light-400! dark:text-light-500!;
}

@utility text-dark400_light500 {
  @apply text-dark-400 dark:text-light-500;
}

@utility text-dark400_light900 {
  @apply text-dark-400! dark:text-light-900!;
}

@utility light-border {
  @apply border-light-800 dark:border-dark-300;
}

@utility light-border-2 {
  @apply border-light-700! dark:border-dark-400!;
}

@utility h1-bold {
  @apply text-[30px] font-bold leading-[42px] tracking-tighter;
}

@utility h2-bold {
  @apply text-[24px] font-bold leading-[31.2px];
}

@utility h2-semibold {
  @apply text-[24px] font-semibold leading-[31.2px];
}

@utility h3-bold {
  @apply text-[20px] font-bold leading-[26px];
}

@utility h3-semibold {
  @apply text-[20px] font-semibold leading-[24.8px];
}

@utility base-medium {
  @apply text-[18px] font-medium leading-[25.2px];
}

@utility base-semibold {
  @apply text-[18px] font-semibold leading-[25.2px];
}

@utility base-bold {
  @apply text-[18px] font-bold leading-[140%];
}

@utility paragraph-regular {
  @apply text-[16px] font-normal leading-[22.4px];
}

@utility paragraph-medium {
  @apply text-[16px] font-medium leading-[22.4px];
}

@utility paragraph-semibold {
  @apply text-[16px] font-semibold leading-[20.8px];
}

@utility body-regular {
  @apply text-[14px] font-normal leading-[19.6px];
}

@utility body-medium {
  @apply text-[14px] font-medium leading-[18.2px];
}

@utility body-semibold {
  @apply text-[14px] font-semibold leading-[18.2px];
}

@utility body-bold {
  @apply text-[14px] font-bold leading-[18.2px];
}

@utility small-regular {
  @apply text-[12px] font-normal leading-[15.6px];
}

@utility small-medium {
  @apply text-[12px] font-medium leading-[15.6px];
}

@utility small-semibold {
  @apply text-[12px] font-semibold leading-[15.6px];
}

@utility subtle-medium {
  @apply text-[10px]! font-medium! leading-[13px]!;
}

@utility subtle-regular {
  @apply text-[10px] font-normal leading-[13px];
}

@utility placeholder {
  @apply placeholder:text-light-400 dark:placeholder:text-light-500;
}

@utility invert-colors {
  @apply invert dark:invert-0;
}

@utility shadow-light100_dark100 {
  @apply shadow-light-100 dark:shadow-dark-100;
}

@utility shadow-light100_darknone {
  @apply shadow-light-100 dark:shadow-none;
}

@utility primary-gradient {
  background: linear-gradient(129deg, #ff7000 0%, #e2995f 100%);
}

@utility dark-gradient {
  background: linear-gradient(
    232deg,
    rgba(23, 28, 35, 0.41) 0%,
    rgba(19, 22, 28, 0.7) 100%
  );
  background: linear-gradient(
    232deg,
    rgba(23, 28, 35, 0.41) 0%,
    rgba(19, 22, 28, 0.7) 100%
  );
}

@utility light-gradient {
  background: linear-gradient(
    132deg,
    rgba(247, 249, 255, 0.5) 0%,
    rgba(229, 237, 255, 0.25) 100%
  );
}

@utility primary-text-gradient {
  background: linear-gradient(129deg, #ff7000 0%, #e2995f 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@utility flex-center {
  @apply flex justify-center items-center;
}

@utility flex-between {
  @apply flex justify-between items-center;
}

@utility flex-start {
  @apply flex justify-start items-center;
}

@utility card-wrapper {
  @apply bg-light-900 dark:dark-gradient shadow-light-100 dark:shadow-dark-100;
}

@utility btn {
  @apply bg-light-800! dark:bg-dark-300!;
}

@utility btn-secondary {
  @apply bg-light-800! dark:bg-dark-400!;
}

@utility btn-tertiary {
  @apply bg-light-700! dark:bg-dark-300!;
}

@utility no-focus {
  @apply focus-visible:ring-0! focus-visible:ring-transparent! focus-visible:ring-offset-0!;
}

@utility markdown {
  @apply !max-w-full prose prose-p:my-2 prose-ol:my-0 prose-ul:my-0 dark:prose-p:text-light-700 dark:prose-ol:text-light-700 dark:prose-ul:text-light-500 dark:prose-strong:text-white dark:prose-headings:text-white prose-headings:text-dark-400 prose-h1:text-dark-300 prose-h2:text-dark-300 prose-p:text-dark-500 prose-ul:text-dark-500 prose-ol:text-dark-500;
}

@utility markdown-editor {
  @apply prose !max-w-full prose-p:m-0 dark:prose-headings:text-white prose-headings:text-dark-400 prose-p:text-dark-500 dark:prose-p:text-light-700 prose-ul:text-dark-500 dark:prose-ul:text-light-700 prose-ol:text-dark-500 dark:prose-ol:text-light-700 dark:prose-strong:text-white prose-blockquote:text-dark-500 dark:prose-blockquote:text-light-700;
}

@utility tab {
  @apply min-h-full! dark:bg-dark-400! bg-light-800! text-light-500! dark:data-[state=active]:bg-dark-300! data-[state=active]:bg-primary-100! data-[state=active]:text-primary-500!;
}

@layer base {
  :root {
    --radius: 0.5rem;
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #ffffff;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.active-theme {
  filter: invert(53%) sepia(98%) saturate(3332%) hue-rotate(0deg)
    brightness(104%) contrast(106%) !important;
}

.hash-span {
  margin-top: -140px;
  padding-bottom: 140px;
  display: block;
}

.mdxeditor-toolbar {
  background: #ffffff !important;
}

.dark .mdxeditor-toolbar {
  background: #151821 !important;
}

.dark .mdxeditor-toolbar button svg {
  color: #858ead !important;
}

.dark .mdxeditor-toolbar button:hover svg {
  color: #000 !important;
}

.dark .mdxeditor-toolbar [role="separator"] {
  border-color: #555 !important;
}

.markdown a {
  color: #1da1f2;
}

.markdown a,
code {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  padding: 2px;
  color: #ff7000 !important;
}

.markdown pre {
  display: grid;
  width: 100%;
}

.markdown pre code {
  width: 100%;
  display: block;
  overflow-x: auto;

  color: inherit !important;
}

[data-lexical-editor="true"] {
  height: 350px !important;
  overflow-y: auto !important;
}

/* NESTED CODE BLOCKS: Only apply grid to visible code blocks */
[data-bright-mode="dark"]:not(html.light [data-bright-mode="dark"]),
[data-bright-mode="light"]:not(:not(html.light [data-bright-mode="light"])) {
  display: grid !important;
  width: 100% !important;
}
```

## `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import localFont from "next/font/local";

import { ReactNode } from "react";

import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
```

## `auth.config.ts`

```ts
// Fixed: Aligned with auth.ts - using unified config from auth.ts
// Delete this file or keep as minimal if proxy needed later
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GitHub, Google],
} satisfies NextAuthConfig;
```

## `auth.ts`

```ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
});
```

## `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-vega",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
```

## `components/Metric.tsx`

```tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  title: string;
  value: string | number;
  alt: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: string;
}

const Metric = ({
  imgUrl,
  title,
  value,
  alt,
  href,
  textStyles,
  imgStyles,
  isAuthor,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imgStyles}`}
        alt={alt}
      />
      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
```

## `components/cards/QuestionCard.tsx`

```tsx
import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Metric from "../Metric";

interface Props {
  question: Question;
}

const QuestionCard = ({
  question: { _id, author, title, createdAt, upvotes, views, answers, tags },
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold text-dark200_light800 base-semibold line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      {/* Tag */}
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      {/* Metric */}
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`asked ${getTimeStamp(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyles="body-medium text-dark400_light700"
          isAuthor="true"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answer"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
```

## `components/cards/TagCard.tsx`

```tsx
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";
interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconClass = getDeviconClassName(name);
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md px-4 py-2 uppercase border-none ">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
```

## `components/filters/HomeFilter.tsx`

```tsx
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const filters = [
  { name: "React", value: "react" },
  { name: "Javascript", value: "javascript" },
  // { name: "Newest", value: "newest" },
  // { name: "Popular", value: "popular" },
  // { name: "Unanswered", value: "unanswered" },
  // { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");
  const handleTypeClick = (filter: string) => {
    let newUrl = "";
    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl.startsWith("?") ? newUrl : `?${newUrl}`, {
      scroll: false,
    });
  };
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `cursor-pointer capitalize px-6 py-3 rounded-lg body-medium shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
```

## `components/form/AuthForm.tsx`

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Signin In..."
              : "Signing Up..."
            : buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
```

## `components/form/QuestionForm.tsx`

```tsx
"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Path, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defineValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {};
  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-medium text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you are a asking a questino to another
                person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-medium text-dark400_light800">
                Detailed explanation of your problem{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>Editor</FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Introduce the problem and expand on what you have put on the
                title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-medium text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    {...field}
                    placeholder="Add tag(s)..."
                  />
                  Tags
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add Tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-16 flex justify-end">
          <Button
            type="submit"
            className="w-fit primary-gradient !text-light-800"
          >
            Ask a Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
```

## `components/form/SocialAuthForm.tsx`

```tsx
"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
```

## `components/navigation/LeftSidebar.tsx`

```tsx
import React from "react";
import NavLinks from "./Navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar flex h-screen flex-col justify-between p-6 pt-36 overflow-y-auto background-light900_dark200 shadow-light-300 dark:shadow-none light-border border-r sticky left-0 top-0 max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
        <div className="flex flex-col gap-3">
          <Button className="w-full min-h-[12px] rounded-lg small-medium btn-secondary light-border-2 shadow-none px-4 py-3">
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                width={20}
                height={20}
                alt="account"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Link>
          </Button>
          <Button className="w-full min-h-[12px] rounded-lg small-medium btn-tertiary text-light-900 light-border-2 shadow-none px-4 py-3">
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                width={20}
                height={20}
                alt="account"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">SignUp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
```

## `components/navigation/Navbar/Index.tsx`

```tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between w-full fixed shadow-light-300 dark:shadow-none background-light900_dark200 p-6 z-50">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          height={23}
          width={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
```

## `components/navigation/Navbar/MobileNavigation.tsx`

```tsx
"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          className="sm:hidden"
          alt="MENU"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Nav Links</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Devflow"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3 pt-6">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="w-full min-h-[12px] rounded-lg small-medium btn-secondary light-border-2 shadow-none px-4 py-3">
                  <span className="primary-text-gradient">Login</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="w-full min-h-[12px] rounded-lg small-medium btn-tertiary text-light-900 light-border-2 shadow-none px-4 py-3">
                  SignUp
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
```

## `components/navigation/Navbar/NavLinks.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks = ({
  isMobileNav = false,
  userId,
}: {
  isMobileNav?: boolean;
  userId?: string;
}) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
```

## `components/navigation/Navbar/Theme.tsx`

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
```

## `components/navigation/RightSidebar.tsx`

```tsx
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";
const hotQuestions = [
  { _id: 1, title: "what is custom hook in React.js?" },
  { _id: 2, title: "how react query works in React.js?" },
  { _id: 3, title: "how to use Redux toolkit?" },
  { _id: 4, title: "what is React Router in React.js?" },
  { _id: 5, title: "what is Context API in React.js?" },
];
const popularTags = [
  { _id: 1, name: "react", questions: 200 },
  { _id: 2, name: "javascript", questions: 150 },
  { _id: 3, name: "typescript", questions: 100 },
  { _id: 4, name: "next", questions: 50 },
  { _id: 5, name: "react query", questions: 75 },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar overflow-y-auto p-6 pt-36 background-light900_dark200 light-border border-l sticky right-0 top-0 shadow-light-300 dark:shadow-none w-[350px] flex flex-col justify-between max-xl:hidden h-screen gap-6">
      <div>
        <h3 className="h3-bold text-dark200_light900">Hot Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id.toString())}
              key={_id}
              className="flex items-center justify-between gap-3 cursor-pointer"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                className="invert-colors"
                alt="chevron"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-15">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
```

## `components/search/LocalSearch.tsx`

```tsx
"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ imgSrc, route, placeholder, otherClasses }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery === query) return;

      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl.startsWith("?") ? newUrl : `?${newUrl}`, {
          scroll: false,
        });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl.startsWith("?") ? newUrl : `?${newUrl}`, {
            scroll: false,
          });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, query, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient rounded-[10px] min-h-[56px] flex grow items-center gap-4 px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular text-dark400_light700 no-focus outline-none shadow-none border-none "
      />
    </div>
  );
};

export default LocalSearch;
```

## `constants/index.ts`

```ts
export const themes = [
  { value: "light", label: "Light", icon: "/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
  { value: "system", label: "System", icon: "/icons/computer.svg" },
];

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  // {
  //   imgURL: "/icons/suitcase.svg",
  //   route: "/jobs",
  //   label: "Find Jobs",
  // },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
```

## `constants/routes.ts`

```ts
const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
```

## `context/Theme.tsx`

```tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
```

## `eslint.config.mjs`

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  "standard",
  // "plugin:tailwindcss/recommended",
  "prettier",
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  "overrides"= [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
]);

export default eslintConfig;
```

## `hooks/use-toast.ts`

```ts
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

## `lib/url.ts`

```ts
import qs from "querystring";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringify(queryString);
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete queryString[key];
  });
  return qs.stringify(queryString);
};
```

## `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { BADGE_CRITERIA } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDeviconClassName(techName: string) {
  const normalizedTech = techName.replace(/[ .]/g, "").toLowerCase();

  // Dictionary mapping possible technology names to Devicon class names
  const techMap: { [key: string]: string } = {
    // JavaScript variations
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",

    // TypeScript variations
    typescript: "devicon-typescript-plain",
    ts: "devicon-typescript-plain",

    // React variations
    react: "devicon-react-original",
    reactjs: "devicon-react-original",

    // Next.js variations
    nextjs: "devicon-nextjs-plain",
    next: "devicon-nextjs-plain",

    // Node.js variations
    nodejs: "devicon-nodejs-plain",
    node: "devicon-nodejs-plain",

    // Bun.js variations
    bun: "devicon-bun-plain",
    bunjs: "devicon-bun-plain",

    // Deno.js variations
    deno: "devicon-denojs-original",
    denojs: "devicon-denojs-plain",

    // Python variations
    python: "devicon-python-plain",

    // Java variations
    java: "devicon-java-plain",

    // C++ variations
    "c++": "devicon-cplusplus-plain",
    cpp: "devicon-cplusplus-plain",

    // C# variations
    "c#": "devicon-csharp-plain",
    csharp: "devicon-csharp-plain",

    // PHP variations
    php: "devicon-php-plain",

    // HTML variations
    html: "devicon-html5-plain",
    html5: "devicon-html5-plain",

    // CSS variations
    css: "devicon-css3-plain",
    css3: "devicon-css3-plain",

    // Git variations
    git: "devicon-git-plain",

    // Docker variations
    docker: "devicon-docker-plain",

    // MongoDB variations
    mongodb: "devicon-mongodb-plain",
    mongo: "devicon-mongodb-plain",

    // MySQL variations
    mysql: "devicon-mysql-plain",

    // PostgreSQL variations
    postgresql: "devicon-postgresql-plain",
    postgres: "devicon-postgresql-plain",

    // AWS variations
    aws: "devicon-amazonwebservices-original",
    "amazon web services": "devicon-amazonwebservices-original",

    // Tailwind CSS variations
    tailwind: "devicon-tailwindcss-original",
    tailwindcss: "devicon-tailwindcss-original",
  };

  return `${techMap[normalizedTech] || "devicon-devicon-plain"} colored`;
}

export function getTechDescription(techName: string): string {
  const normalizedTech = techName.replace(/[ .]/g, "").toLowerCase();

  // Mapping technology names to descriptions
  const techDescriptionMap: { [key: string]: string } = {
    javascript:
      "JavaScript is a powerful language for building dynamic, interactive, and modern web applications.",
    typescript:
      "TypeScript adds strong typing to JavaScript, making it great for scalable and maintainable applications.",
    react:
      "React is a popular library for building fast, component-based user interfaces and web applications.",
    nextjs:
      "Next.js is a React framework for building fast, SEO-friendly, and production-grade web applications.",
    nodejs:
      "Node.js is a runtime for building fast and scalable server-side applications using JavaScript.",
    python:
      "Python is a beginner-friendly language known for its versatility and simplicity in various fields.",
    java: "Java is a versatile, cross-platform language widely used in enterprise and Android development.",
    "c++":
      "C++ is a high-performance language ideal for system programming, games, and large-scale applications.",
    git: "Git is a version control system that helps developers track changes and collaborate on code efficiently.",
    docker:
      "Docker simplifies app deployment by containerizing environments, ensuring consistency across platforms.",
    mongodb:
      "MongoDB is a flexible NoSQL database ideal for handling unstructured data and scalable applications.",
    mysql:
      "MySQL is a popular open-source relational database management system known for its stability and performance.",
    postgresql:
      "PostgreSQL is a powerful open-source SQL database known for its scalability and robustness.",
    aws: "Amazon Web Services (AWS) is a cloud computing platform that offers a wide range of services for building, deploying, and managing web and mobile applications.",
  };

  return (
    techDescriptionMap[normalizedTech] ||
    `${techName} is a technology or tool widely used in software development, providing valuable features and capabilities.`
  );
}

export function formatNumber(number: number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
}

export const getTimeStamp = (createdAt: Date): string => {
  const date = new Date(createdAt);
  const now = new Date();

  const diffMilliseconds = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diffMilliseconds / 1000);
  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  }

  const diffMinutes = Math.round(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} mins ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hours ago`;
  }

  const diffDays = Math.round(diffHours / 24);

  return `${diffDays} days ago`;
};

export function assignBadges(params: {
  criteria: {
    type: keyof typeof BADGE_CRITERIA;
    count: number;
  }[];
}) {
  const badgeCounts: Badges = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };

  const { criteria } = params;

  criteria.forEach((item) => {
    const { type, count } = item;
    const badgeLevels = BADGE_CRITERIA[type];

    Object.keys(badgeLevels).forEach((level) => {
      if (count >= badgeLevels[level as keyof typeof badgeLevels]) {
        badgeCounts[level as keyof Badges] += 1;
      }
    });
  });

  return badgeCounts;
}

export function processJobTitle(title: string | undefined | null): string {
  // Check if title is undefined or null
  if (title === undefined || title === null) {
    return "No Job Title";
  }

  // Split the title into words
  const words = title.split(" ");

  // Filter out undefined or null and other unwanted words
  const validWords = words.filter((word) => {
    return (
      word !== undefined &&
      word !== null &&
      word.toLowerCase() !== "undefined" &&
      word.toLowerCase() !== "null"
    );
  });

  // If no valid words are left, return the general title
  if (validWords.length === 0) {
    return "No Job Title";
  }

  // Join the valid words to create the processed title
  const processedTitle = validWords.join(" ");

  return processedTitle;
}
```

## `lib/validations.ts`

```ts
import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(130, { message: "Title musn't be longer then 130 characters." }),
  content: z.string().min(100, { message: "Minimum of 100 characters." }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag must have at least 1 character." })
        .max(15, { message: "Tag must not exceed 15 characters." })
    )
    .min(1, { message: "Add at least one tag." })
    .max(3, { message: "Maximum of 3 tags." }),
});

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().optional(),
  image: z.string().url("Invalid image URL").optional(),
  location: z.string().optional(),
  portfolio: z.string().url("Invalid portfolio URL").optional(),
  reputation: z.number().optional(),
});

export const AccountSchema = z.object({
  userId: z.string(),
  name: z.string().min(1, "Name is required"),
  image: z.string().url("Invalid image URL").optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .optional(),
  provider: z.string().min(1, "Provider is required"),
  providerAccountId: z.string().min(1, "Provider account ID is required"),
});

export const SignInWithOAuthSchema = z.object({
  provider: z.enum(["github", "google"]),
  providerAccountId: z.string().min(1, "Provider account ID is required"),
  user: z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    image: z.string().url("Invalid image URL").optional(),
  }),
});

export const EditQuestionSchema = AskQuestionSchema.extend({
  questionId: z.string().min(1, "Question ID is required"),
});

export const GetQuestionSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
});

export const PaginatedSearchParamsSchema = z.object({
  page: z.number().min(1, "Page must be at least 1").default(1),
  pageSize: z.number().min(1, "Page size must be at least 1").default(10),
  query: z.string().optional(),
  filter: z.string().optional(),
  sort: z.string().optional(),
});

export const GetTagQuestionsSchema = PaginatedSearchParamsSchema.extend({
  tagId: z.string().min(1, "Tag ID is required"),
});

export const IncrementViewsSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
});

export const AnswerSchema = z.object({
  content: z.string().min(100, { message: "Minimum of 100 characters." }),
});

export const AnswerServerSchema = AnswerSchema.extend({
  questionId: z.string().min(1, "Question ID is required"),
});

export const GetAnswersSchema = PaginatedSearchParamsSchema.extend({
  questionId: z.string().min(1, "Question ID is required"),
});

export const AIAnswerSchema = z.object({
  question: z
    .string()
    .min(5, {
      message: "Question title must be at least 5 characters.",
    })
    .max(130, {
      message: "Question title musn't be longer then 130 characters.",
    }),
  content: z.string().min(100, {
    message: "Question description must have Minimum of 100 characters.",
  }),
  userAnswer: z.string().optional(),
});

export const CreateVoteSchema = z.object({
  targetId: z.string().min(1, "Target ID is required"),
  targetType: z.enum(["question", "answer"], {
    message: "Invalid target type. Must be 'question' or 'answer'.",
  }),
  voteType: z.enum(["upvote", "downvote"], {
    message: "Invalid vote type. Must be 'upvote' or 'downvote'.",
  }),
});

export const UpdateVoteCountSchema = CreateVoteSchema.extend({
  change: z
    .number()
    .int()
    .min(-1, "Change must be -1 (decrement) or 1 (increment)")
    .max(1, "Change must be -1 (decrement) or 1 (increment)"),
});

export const HasVotedSchema = CreateVoteSchema.pick({
  targetId: true,
  targetType: true,
});

export const CollectionBaseSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
});

export const GetUserSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
});

export const GetUserQuestionsSchema = PaginatedSearchParamsSchema.extend({
  userId: z.string().min(1, "User ID is required"),
});

export const GetUsersAnswersSchema = PaginatedSearchParamsSchema.extend({
  userId: z.string().min(1, "User ID is required"),
});

export const GetUserTagsSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
});

export const DeleteQuestionSchema = z.object({
  questionId: z.string().min(1, "Question ID is required"),
});

export const DeleteAnswerSchema = z.object({
  answerId: z.string().min(1, "Answer ID is required"),
});

export const CreateInteractionSchema = z.object({
  action: z.enum([
    "view",
    "upvote",
    "downvote",
    "bookmark",
    "post",
    "edit",
    "delete",
    "search",
  ]),
  actionTarget: z.enum(["question", "answer"]),
  actionId: z.string().min(1),
  authorId: z.string().min(1),
});

export const ProfileSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(130, { message: "Name musn't be longer then 130 characters." }),
  username: z
    .string()
    .min(3, { message: "username musn't be longer then 100 characters." }),
  portfolio: z.string().url({ message: "Please provide valid URL" }),
  location: z.string().min(3, { message: "Please provide proper location" }),
  bio: z.string().min(3, {
    message: "Bio must be at least 3 characters.",
  }),
});

export const UpdateUserSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(130, { message: "Name musn't be longer then 130 characters." }),
  username: z
    .string()
    .min(3, { message: "username musn't be longer then 100 characters." }),
  portfolio: z.string().url({ message: "Please provide valid URL" }),
  location: z.string().min(3, { message: "Please provide proper location" }),
  bio: z.string().min(3, {
    message: "Bio must be at least 3 characters.",
  }),
});

export const GlobalSearchSchema = z.object({
  query: z.string(),
  type: z.string().nullable().optional(),
});
```

## `next-env.d.ts`

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## `package.json`

```json
{
  "name": "devflow",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@auth/prisma-adapter": "^2.11.1",
    "@hookform/resolvers": "^5.2.2",
    "@next-auth/prisma-adapter": "^1.0.7",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-n": "^17.24.0",
    "eslint-plugin-promise": "^7.2.1",
    "eslint-plugin-tailwindcss": "^3.18.2",
    "lucide-react": "^1.7.0",
    "next": "16.2.1",
    "next-auth": "^5.0.0-beta.30",
    "next-themes": "^0.4.6",
    "prettier": "^3.8.1",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.72.0",
    "shadcn": "^4.1.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5"
  }
}
```

## `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## `proxy.ts`

```ts
import { NextRequest } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

// Use only one of the two proxy options below
// 1. Use proxy directly
// export const { auth: proxy } = NextAuth(authConfig)

// 2. Wrapped proxy option
const { auth } = NextAuth(authConfig);
export const proxy = auth(async function proxy(req: NextRequest) {
  // Your custom proxy logic goes here
});
```

## `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFF1E6",
          "500": "#FF7000",
        },
        dark: {
          "100": "#000000",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#101012",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
        link: {
          "100": "#1DA1F2",
        },
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## `types/global.d.ts`

```ts
interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  views: number;
  upvotes: string;
  answers: string;
}
```
