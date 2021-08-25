import React from "react";
import Image from "next/image";

export default function DemoCard({
  title,
  image,
  description,
  tags,
  visit,
  source,
  technical,
}) {
  return (
    <div className="">
      <div
        className="group relative rounded-lg block md:flex items-center dark:bg-gray-800 bg-gray-100 shadow-xl"
        style={{ minHeight: "22rem" }}
      >
        <div
          className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: "22rem" }}
        >
          <Image
            className="w-full rounded-t-lg object-cover object-center"
            src={image}
            layout="fill"
            objectFit="cover"
            alt={title}
          />
          <div className="absolute inset-0 w-full h-full bg-gray-900 dark:bg-gray-100 opacity-90 group-hover:opacity-30 transition-opacity duration-1000 ease-out"></div>
          <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current dark:text-gray-900 text-white text-2xl font-bold">
            {title}
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center dark:bg-gray-800 bg-gray-100 rounded-lg">
          <div className="p-8 md:pr-16 md:pl-10 md:py-8">
            <h3 className="font-bold my-2">Description</h3>
            <p className="text-sm">{description}</p>
            <h3 className="font-bold my-2">Technical details</h3>
            <div className="inline-flex">
              <ul className="list-none md:list-disc">
                {technical &&
                  technical.map((item, index) => (
                    <li
                      key={item + index}
                      className="mr-auto text-sm text-left"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <a
              className="ml-auto flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href={visit}
            >
              <span>Go to demo</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current dark:text-gray-800 text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
    </div>
  );
}
