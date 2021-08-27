import Head from "next/head";
import Navbar from "../components/Navbar";
import SnippetCard from "../components/SnippetCard";
import Layout from "../components/Layout";

import { getAllSnippets } from "../lib/snippets";

export default function Snippets({ snippets }) {
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
          <h2 className="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
            Menu
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full max-w-3xl mx-auto mt-4">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
          <SnippetCard
            title="Adding more"
            slug="/snippets"
            description="Adding more each day.."
            logo="react.png"
          />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const snippets = getAllSnippets();

  return {
    props: {
      snippets,
    },
  };
}
