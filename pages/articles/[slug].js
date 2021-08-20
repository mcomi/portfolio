import React, { useState } from "react";
import {
  getAllDocs,
  getDocBySlug,
  getAllDocsSlugs,
  getAllDocsTitles,
} from "../../lib/docs";
import { markdownToHtml } from "../../lib/markdown";
import ItemsNav from "../../components/ItemsNav";

export default function Doc({ meta, content, guidesSlugs, guidesTitles }) {
  const [menuActive, setMenuActive] = useState(false);
  const showNavigation = () => {
    setMenuActive(!menuActive);
  };
  return (
    <>
      <div id="skip" class="flex">
        <aside
          id="docs-menu"
          class={`fixed z-40 inset-0 flex-none h-full dark:bg-gray-900 bg-opacity-25 w-full bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block ${
            menuActive ? "" : "hidden"
          }`}
        >
          <nav class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 bg-gray-100 dark:bg-gray-900 lg:text-lg pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
            <div class="space-y-4">
              <h2 class="pt-4 text-sm lg:text-lg font-semibold tracking-widest uppercase text-gray-600 dark:text-white">
                Articles Menu
              </h2>
              <div class="space-y-4">
                <ItemsNav
                  section="snippets"
                  slugs={guidesSlugs}
                  titles={guidesTitles}
                />
              </div>
            </div>
          </nav>
        </aside>
        <article
          className="prose lg:prose-lg px-2 lg:px-8 w-full max-w-6xl mx-auto my-4 sm:my-16 dark:prose-dark overflow-x-scroll"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <button
        type="button"
        class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 block lg:hidden"
        onClick={showNavigation}
      >
        <span class="sr-only">Open docs navigation</span>
        {menuActive ? (
          <svg
            className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              fill="none"
              className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
              <path
                d="M4 8h16M4 16h16"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              class="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </>
        )}
      </button>
    </>
  );
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || "");
  const guidesSlugs = getAllDocsSlugs();
  const guidesTitles = getAllDocsTitles();
  return {
    props: {
      ...doc,
      content,
      guidesSlugs,
      guidesTitles,
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
