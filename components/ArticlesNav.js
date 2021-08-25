import React from "react";
import Link from "next/link";

export default function ArticlesNav({ section, slugs, titles }) {
  return (
    <div className="w-full p-6 sm:w-60 text-gray-800 dark:text-white mx-auto">
      <div className="space-y-8 text-sm">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            {slugs.map((slug, index) => {
              return (
                <Link key={slug} href={`/${section}/${slug}`}>
                  <a className="text-xl py-2 font-thin text-gray-700 dark:text-white">
                    {titles[index]}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
