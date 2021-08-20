import Head from "next/head";
import Navbar from "../components/Navbar";
import ItemsNav from "../components/ItemsNav";

import { getAllDocsSlugs, getAllDocsTitles } from "../lib/docs";

export default function Guides({ guidesSlugs, guidesTitles }) {
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
        <h1 className="text-2xl pb-3">Articles</h1>
        <p className="lg:text-lg py-3">
          In this section I share useful guides to review important topics for
          web development. In this career it is very important to always keep
          updated and I made this space to share what has helped me to learn.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-6 sm:w-full">
        <h2 class="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
          Menu
        </h2>
        <ItemsNav
          section="articles"
          slugs={guidesSlugs}
          titles={guidesTitles}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const guidesSlugs = getAllDocsSlugs();
  const guidesTitles = getAllDocsTitles();

  return {
    props: {
      guidesSlugs,
      guidesTitles,
    },
  };
}
