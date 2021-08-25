import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children, key }) {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  if (!mounted) return null;

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
      <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen">
        <motion.main
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="leading-7 dark:text-white text-gray-800 flex flex-col justify-center w-full flex-1 lg:px-20 px-5 text-center"
        >
          {children}
        </motion.main>
      </div>
    </>
  );
}
