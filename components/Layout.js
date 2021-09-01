import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout(props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const { children, key, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Manuel Comi - Developer",
    description: `Front-end developer, Tech Lead and Tech entusiast.`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mcomix.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mcomix.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manuel Comi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <div className="flex flex-col justify-center min-h-screen">
        <motion.main
          key={key}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="leading-7 w-full flex-1 lg:px-20 px-5"
        >
          {children}
        </motion.main>
      </div>
    </>
  );
}
