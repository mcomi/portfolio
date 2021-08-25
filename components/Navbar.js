import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const [isActive, setActive] = useState(false);

  const handleActiveMenu = () => {
    setActive(!isActive);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
    <nav className="w-full dark:bg-gray-900 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex text-center items-center justify-between p-6 w-full">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <a className="flex  dark:text-white text-gray-800 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>

                <span className="mx-3 font-thin text-lg md:text-xl uppercase">
                  Manuel Comi
                </span>
              </a>
            </Link>
            <div className="-mr-2 flex md:hidden">
              {theme === "dark" ? (
                <div
                  className="flex items-center mr-4 cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <svg
                    className="h-7 w-7 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  className="flex  items-center mr-4 cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              )}
              <button
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue-600 hover:border-white"
                onClick={handleActiveMenu}
                aria-controls="mobile-menu"
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div className="w-full hidden md:flex flex-grow items-center lg:w-auto">
              <div className="text-base md:flex-grow">
                <Link href="/demos">
                  <a className="font-thin tracking-wider mt-4 inline-block lg:mt-0 text-teal-200 hover:font-semibold hover:scale-110 mr-4">
                    Demos
                  </a>
                </Link>
                <Link href="/websites">
                  <a className="font-thin tracking-wider mt-4 inline-block lg:mt-0 text-teal-200 hover:font-semibold hover:scale-110 mr-4">
                    Websites
                  </a>
                </Link>
                <Link href="/articles">
                  <a className="font-thin tracking-wider mt-4 inline-block lg:mt-0 text-teal-200 hover:font-semibold hover:scale-110 mr-4">
                    Articles
                  </a>
                </Link>
                <Link href="/snippets">
                  <a className="font-thin tracking-wider mt-4 inline-block lg:mt-0 text-teal-200 hover:font-semibold hover:scale-110">
                    Snippets
                  </a>
                </Link>
              </div>
              {theme === "dark" ? (
                <div
                  className="flex  items-center mr-2 cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-thin tracking-wider">
                    Light
                  </span>
                </div>
              ) : (
                <div
                  className="flex  items-center mr-2 cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <svg
                    className="h-5 w-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-thin tracking-wider">
                    Dark
                  </span>
                </div>
              )}
              <a
                className="mt-4 lg:mt-0 flex items-center mx-2 dark:text-white text-gray-800 hover:text-blue-600"
                href="https://www.linkedin.com/in/mcomix/?locale=en_US"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </a>

              <a
                className="mt-4 lg:mt-0 flex items-center mx-2 dark:text-white text-gray-800 hover:text-blue-600"
                href="https://twitter.com/mkomix"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                </svg>
              </a>

              <a
                className="mt-4 lg:mt-0 flex items-center mx-2 dark:text-white text-gray-800 hover:text-blue-600"
                href="https://github.com/mcomi"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isActive}
        enter="transition transform ease-out duration-300"
        enterFrom="opacity-0 transform scale-90"
        enterTo="opacity-100 transform scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="opacity-100 transform scale-100"
        leaveTo="opacity-0 transform scale-90"
        className={`${
          isActive ? "absolute block" : "relative hidden"
        } mobile-nav p-8 top-0 left-0 bg-gray-100 dark:bg-gray-900 z-50 h-screen w-full transform transition-all dark:text-white absolute block`}
      >
        <div class="flex justify-end mb-4">
          <button
            class="border rounded-full p-3 h-12 w-12 flex items-center justify-center"
            onClick={handleActiveMenu}
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="nav text-center flex flex-col justify-between items-center">
          <Link href="/demos">
            <a
              onClick={handleActiveMenu}
              className="px-3 rounded-md text-xl py-4 font-thin tracking-wider hover:text-blue-600"
            >
              Demos
            </a>
          </Link>
          <Link href="/websites">
            <a
              onClick={handleActiveMenu}
              className="px-3 rounded-md text-xl py-4 font-thin tracking-wider hover:text-blue-600"
            >
              Websites
            </a>
          </Link>
          <Link href="/articles">
            <a
              onClick={handleActiveMenu}
              className="px-3 rounded-md text-xl py-4 font-thin tracking-wider hover:text-blue-600"
            >
              Articles
            </a>
          </Link>
          <Link href="/snippets">
            <a
              onClick={handleActiveMenu}
              className="px-3 rounded-md text-xl py-4 font-thin tracking-wider hover:text-blue-600"
            >
              Snippets
            </a>
          </Link>
        </ul>
      </Transition>
    </nav>
  );
}
