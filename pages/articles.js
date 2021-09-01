import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ArticlesNav from "../components/ArticlesNav";
import SectionTitle from "../components/SectionTitle";

import { getAllDocs } from "../lib/docs";

export default function Guides({ docs }) {
  return (
    <Layout
      title="Articles - Manuel Comi"
      description="Guides and interesting articles"
    >
      <div className="items-start max-w-3xl mx-auto mb-16">
        <SectionTitle title="Articles" />
        <p className="lg:text-lg py-3">
          I've been programming for almost 13 years now. I have worked with so
          many different technologies and languages that many times I have to
          remember and re-study some things. I am here to share guides or
          interesting articles that have always helped me.
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Articles
        </h3>
        <div className="space-y-4">
          {docs
            ? docs.map((doc) => {
                return (
                  <a
                    className="w-full"
                    href={`/articles/${doc.slug}`}
                    key={doc.slug}
                  >
                    <div className="mb-8 w-full">
                      <div className="flex flex-col md:flex-row justify-between">
                        <h4 className="text-lg blog-heading md:text-xl mb-2 w-full text-gray-900 dark:text-gray-100">
                          {doc.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {doc.description}
                      </p>
                    </div>
                  </a>
                );
              })
            : null}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const docs = getAllDocs("docs");

  return {
    props: {
      docs,
    },
  };
}
