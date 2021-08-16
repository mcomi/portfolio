import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-wrap items-center justify-around max-w-6xl mt-6 sm:w-full">
        <aside class="w-full p-6 sm:w-60 text-gray-800 dark:text-white">
          <nav class="space-y-8 text-sm">
            <div class="space-y-2">
              <h2 class="text-sm font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Javascript
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/javascript-internals"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Javascript Internals
                </a>
                <a
                  href="/snippets/javascript-types"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Javascript Types
                </a>
                <a
                  href="/snippets/javascript-asynchronous"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Javascript Asynchronous
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-sm font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                React
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/react"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Useful snippets
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-sm font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Docker
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/docker"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Useful snippets
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-sm font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Next.js
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/docker"
                  class="text-xs text-gray-700 dark:text-white"
                >
                  Next.js + Prism
                </a>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
