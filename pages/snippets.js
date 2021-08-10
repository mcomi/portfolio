import Head from "next/head";
import Navbar from "./components/Navbar";

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

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="/snippets/prism"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Prism example</h3>
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="/snippets/javascript"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Javascript</h3>
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="/snippets/react"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">React</h3>
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="/snippets/docker"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Docker</h3>
        </a>
      </div>
    </>
  );
}
