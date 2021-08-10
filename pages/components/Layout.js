import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Layout({ children }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
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
        <Navbar colorTheme={theme} setTheme={setTheme} />
        <main className="dark:text-white text-gray-800 flex flex-col justify-center w-full flex-1 lg:px-20 px-5 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
