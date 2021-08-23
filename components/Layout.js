import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Layout({ children }) {
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
        <Navbar colorTheme={theme} setTheme={setTheme} />
        <main className="dark:text-white text-gray-800 flex flex-col justify-center w-full flex-1 lg:px-20 px-5 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
