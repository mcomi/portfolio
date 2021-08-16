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

      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl pb-3">Snippets</h1>
        <p className="lg:text-lg py-3">
          Here you will be able to review different topics of study very useful
          to master web development, as well as several useful code snippets,
          configurations to integrate some technologies or some examples, among
          other things.
        </p>
        <p className="lg:text-lg py-3">
          The content is divided into different categories to make it easier to
          navigate between the different topics.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-6 sm:w-full">
        <div class="w-full p-6 sm:w-60 text-gray-800 dark:text-white mx-auto">
          <divs class="space-y-8 text-sm">
            <div class="space-y-2">
              <h2 class="text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Javascript
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/javascript-internals"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Javascript Internals
                </a>
                <a
                  href="/snippets/javascript-types"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Javascript Types
                </a>
                <a
                  href="/snippets/javascript-asynchronous"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Javascript Asynchronous
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                React
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/react"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Useful snippets
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Docker
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/docker"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Useful snippets
                </a>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Next.js
              </h2>
              <div class="flex flex-col space-y-1">
                <a
                  href="/snippets/prism"
                  class="text-base text-gray-700 dark:text-white"
                >
                  Next.js + Prism
                </a>
              </div>
            </div>
          </divs>
        </div>
      </div>
    </>
  );
}
