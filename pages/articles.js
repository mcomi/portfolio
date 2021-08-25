import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ArticlesNav from "../components/ArticlesNav";

import { getAllDocsSlugs, getAllDocsTitles } from "../lib/docs";

export default function Guides({ guidesSlugs, guidesTitles }) {
  return (
    <>
      <Head>
        <title>Articles - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl pb-3">Articles</h1>
          <p className="lg:text-lg py-3">
            In this section I share useful guides to review important topics for
            web development. In this career it is very important to always keep
            updated and I made this space to share what has helped me to learn.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto mt-6 sm:w-full">
          <h2 className="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
            Menu
          </h2>
          <ArticlesNav
            section="articles"
            slugs={guidesSlugs}
            titles={guidesTitles}
          />
        </div>
      </Layout>
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
