import Head from "next/head";
import Navbar from "../components/Navbar";
import ItemsNav from "../components/ItemsNav";

import { getAllSnippetsSlugs, getAllSnippetsTitles } from "../lib/snippets";

export default function Snippets({ snippetsSlugs, snippetsTitles }) {
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
          Many times we need code that we have already used previously for some
          project. In this section I put some code snippets that I have found
          useful to have at hand.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-6 sm:w-full">
        <h2 class="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
          Menu
        </h2>
        <ItemsNav
          section="snippets"
          slugs={snippetsSlugs}
          titles={snippetsTitles}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const snippetsSlugs = getAllSnippetsSlugs();
  const snippetsTitles = getAllSnippetsTitles();

  return {
    props: {
      snippetsSlugs,
      snippetsTitles,
    },
  };
}
