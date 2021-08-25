import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import DemoCard from "../components/DemoCard";
import { demos } from "../constants/constants";

export default function Demos() {
  return (
    <>
      <Head>
        <title>Demos - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div class="flex flex-col justify-around uppercase max-w-3/5 pb-7">
          <h1 class="text-lg pb-4 text-gray-400 tracking-wider">Demos</h1>
          <span class="text-2xl font-bold tracking-widest">
            some demos I have worked
          </span>
        </div>
        <div className="grid 3xl:grid-cols-2 grid-cols-1 gap-10 w-full md:w-4/5 mx-auto antialiased mb-8">
          {demos.map((demo, index) => {
            return <DemoCard key={demo.title + index} {...demo} />;
          })}
        </div>
      </Layout>
    </>
  );
}
