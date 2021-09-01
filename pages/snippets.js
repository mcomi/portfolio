import SectionTitle from "../components/SectionTitle";
import SnippetCard from "../components/SnippetCard";
import Layout from "../components/Layout";
import Image from "next/image";

import { getAllDocs } from "../lib/docs";

export default function Snippets({ snippets }) {
  return (
    <Layout title="Code Snippets - Manuel Comi" description="">
      <div className="items-start max-w-3xl mx-auto mb-16">
        <SectionTitle
          title="Snippets"
          description="A collection of code snippets"
        />
        <p className="lg:text-lg py-3">
          Reusable{" "}
          <span className="bg-gray-200 font-bold px-1 py-0.5 tracking-tight dark:text-gray-100 dark:bg-gray-700">
            {"<code snippets />"}
          </span>{" "}
          that can be easily integrated in your application. You can navigate
          into some functions and code snippets which can be used on your
          webpage.
        </p>

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
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const snippets = getAllDocs("snippets");

  return {
    props: {
      snippets,
    },
  };
}
