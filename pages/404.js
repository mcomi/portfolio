import React from "react";
import imageNotFound from "../assets/not-found.svg";
import Image from "next/image";
import Layout from "../components/Layout";
import GradientCard from "../components/GradientCard";

export default function NotFound() {
  return (
    <Layout title="404 - Manuel Comi">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <Image src={imageNotFound}></Image>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Oops... page not found.
        </h1>
        <span className="text-2xl text-blue-600">
          But you can look into other section.
        </span>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full max-w-3xl mx-auto mt-4">
          <GradientCard
            url="/projects"
            title="Projects"
            description="Checkout some of my projects."
            tone="green"
            image="projects.svg"
          />
          <GradientCard
            url="/websites"
            title="Websites"
            description="Some websites I`ve build."
            tone="blue"
            image="websites.svg"
          />
          <GradientCard
            url="/articles"
            title="Articles"
            description="Find some useful guides."
            tone="yellow"
            image="articles.svg"
          />
          <GradientCard
            url="/snippets"
            title="Snippets"
            description="Small pieces of code that can help you."
            tone="orange"
            image="snippets.svg"
          />
        </div>
      </div>
    </Layout>
  );
}
