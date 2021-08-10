import React from "react";
import { getAllDocs, getDocBySlug } from "../../lib/docs";
import {markdownToHtml} from "../../lib/markdown";

export default function Doc({ meta, content }) {
  return (
    <>
      <div id="skip">
        <article
          className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16 dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || "");
  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
