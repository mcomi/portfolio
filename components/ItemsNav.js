import React, { useState, useEffect } from "react";

export default function ItemsNav({ slugs, titles }) {
  const [slugsForShow, setSlugs] = useState([]);
  return (
    <div class="w-full p-6 sm:w-60 text-gray-800 dark:text-white mx-auto">
      <div class="space-y-8 text-sm">
        <div class="space-y-2">
          <div class="flex flex-col space-y-1">
            {slugs.map((slug, index) => {
              return (
                <a
                  href={`/guides/${slug}`}
                  class="text-base text-gray-700 dark:text-white"
                >
                  {titles[index]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
