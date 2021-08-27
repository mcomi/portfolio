import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ArticlesNav from "../components/ArticlesNav";
import SectionTitle from "../components/SectionTitle";

import { getAllDocsSlugs, getAllDocsTitles } from "../lib/docs";

export default function Guides({ guidesSlugs, guidesTitles }) {
  return (
    <>
      <Head>
        <title>Articles - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="items-start max-w-3xl mx-auto mb-16">
          <SectionTitle title="Articles" />
          <p className="lg:text-lg py-3">
            I've been programming for almost 13 years now. I have worked with so
            many different technologies and languages that many times I have to
            remember and re-study some things. I am here to share guides or
            interesting articles that have always helped me.
          </p>
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
