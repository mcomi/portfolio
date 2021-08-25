import Head from "next/head";
import Navbar from "../components/Navbar";
import ArticlesNav from "../components/ArticlesNav";
import Layout from "../components/Layout";

import { getAllSnippetsSlugs, getAllSnippetsTitles } from "../lib/snippets";

export default function Snippets({ snippetsSlugs, snippetsTitles }) {
  return (
    <>
      <Head>
        <title>Snippets - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl pb-3">Snippets</h1>
          <p className="lg:text-lg py-3">
            Many times we need code that we have already used previously for
            some project. In this section I put some code snippets that I have
            found useful to have at hand.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto mt-6 sm:w-full">
          <h2 class="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
            Menu
          </h2>
          <ArticlesNav
            section="snippets"
            slugs={snippetsSlugs}
            titles={snippetsTitles}
          />
        </div>
      </Layout>
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
