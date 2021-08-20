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
        <h1 className="text-2xl pb-3">Guides</h1>
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
        <ItemsNav slugs={guidesSlugs} titles={guidesTitles} />
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
