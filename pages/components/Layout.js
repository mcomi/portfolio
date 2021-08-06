import Navbar from "./Navbar";
import Footer from "./Footer";

import useDarkMode from "../hooks/useDarkMode";
import Head from "next/head";

export default function Layout({ children }) {
  const [colorTheme, setTheme] = useDarkMode();

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
      <div className="dark:bg-gray-800 dark:text-white flex flex-col items-center justify-center min-h-screen">
        <Navbar colorTheme={colorTheme} setTheme={setTheme} />
        <main className="dark:text-white text-gray-800 flex flex-col justify-center w-full flex-1 lg:px-20 px-5 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
