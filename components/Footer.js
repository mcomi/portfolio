import React from "react";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <>
      <footer className="dark:bg-gray-900  dark:text-white flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/mcomi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manuel Comi © 2021
        </a>
      </footer>
      <ScrollToTop />
    </>
  );
}
