import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import DemoCard from "../components/DemoCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../constants/constants";

export default function Projects() {
  return (
    <Layout
      title="Projects - Manuel Comi"
      description="Commercial and hobby projects"
    >
      <div className="items-start max-w-3xl mx-auto mb-16">
        <div className="flex flex-col justify-around pb-7">
          <SectionTitle title="Projects" />
          <p className="lg:text-lg py-3">
            I've developed some work projects as well as some hobby projects. I
            share some of them here.
          </p>
        </div>
        <div className="grid 3xl:grid-cols-2 grid-cols-1 gap-10 w-full mx-auto antialiased mb-8">
          {projects.map((demo, index) => {
            return <DemoCard key={demo.title + index} {...demo} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
