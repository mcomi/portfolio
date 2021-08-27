import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Image from "next/image";
import icon from "../assets/developer.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
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
      <Layout>
        <div className="max-w-2xl mx-auto">
          <div className="w-32 lg:w-56 mx-auto">
            <Image src={icon}></Image>
          </div>
          <h1 className="text-2xl tracking-wider lg:text-4xl font-bold pb-5">
            Hi, I'm{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              Manuel
            </a>
            . Nice to meet you.
          </h1>

          <p className="lg:text-xl py-3">
            I'm a Software Engineer with 13 years of experience based in Mexico
            City.
          </p>
          <p className="lg:text-xl py-3">
            I'm specialized in leading software development and front-end
            technologies; and for the last 8 years I have been managing and
            leading a team of engineers at Filmoteca UNAM to develop
            technological solutions. The most important one, a collection
            management software to preserve film archives, which has been
            recognized within UNAM as a high impact institutional software
            project.
          </p>
          <p className="lg:text-xl pt-3 pb-10">
            I put together this website to show my passion for web technologies
            and some of the work I have done, as well as a guide of concepts and
            code snippets that have been useful during my learning process.
          </p>
        </div>
      </Layout>
    </>
  );
}
