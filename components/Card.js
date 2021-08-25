import React from "react";
import Image from "next/image";

export default function Card({
  title,
  image,
  description,
  tags,
  visit,
  source,
}) {
  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#00B7FF" offset="20%" />
      <stop stop-color="#18E3FF" offset="50%" />
      <stop stop-color="#00B7FF" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#00B7FF" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <div className="p-4 max-w-sm">
      <div className="group transform transition-all duration-500 ease-in-out hover:scale-105 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col">
        <div className="min-h-25 relative">
          <Image
            className="w-full rounded-t-lg object-cover object-center"
            src={image}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            alt={title}
          />
        </div>
        <div className="p-4 h-auto flex-grow flex flex-col justify-between">
          <div>
            <h1 className="block transition-all duration-500 ease-in-out dark:text-gray-200 text-gray-800 dark:group-hover:text-gray-100 group-hover:text-blue-600 font-semibold mb-2 text-base md:text-base lg:text-lg">
              {title}
            </h1>

            <div className="text-gray-600 dark:text-gray-300 leading-relaxed block text-sm md:text-xs lg:text-sm">
              {description}
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly gap-2 mt-8">
            {tags.map((tag) => {
              return (
                <div
                  key={tag}
                  className="bg-gray-200 py-1 px-2 mr-2 rounded-full text-xs text-gray-700"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-4">
            {source && (
              <a
                href={source}
                target="_blank"
                className="px-6 py-1 text-base border-2 rounded-full dark:text-gray-100 text-blue-800 dark:border-gray-100 border-blue-800 text-center dark:hover:bg-gray-100 dark:hover:text-gray-800 hover:bg-blue-800 hover:border-white hover:text-white md:text-base mb-4 mr-4"
              >
                Code
              </a>
            )}
            <a
              href={visit}
              target="_blank"
              className="px-6 py-1 text-base border-2 rounded-full dark:text-gray-100 text-blue-800 dark:border-gray-100 border-blue-800 text-center dark:hover:bg-gray-100 dark:hover:text-gray-800 hover:bg-blue-800 hover:border-white hover:text-white md:text-base mb-4 mr-4"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
