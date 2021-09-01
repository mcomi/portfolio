import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SnippetCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border  dark:border-gray-200 border-gray-900 rounded p-4 w-full text-left"
        {...rest}
      >
        <div className="flex items-center space-x-5">
          <div className="w-15 h-full">
            <Image
              alt={title}
              height={40}
              width={40}
              src={`/logos/${logo}`}
              className="w-15 h-15"
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold text-left mt-1 text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-1 text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
