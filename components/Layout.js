import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children, key }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <div className="dark:bg-gray-900 dark:text-white flex flex-col justify-center min-h-screen">
        <motion.main
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="leading-7 dark:text-white text-gray-800 w-full flex-1 lg:px-20 px-5"
        >
          {children}
        </motion.main>
      </div>
    </>
  );
}
