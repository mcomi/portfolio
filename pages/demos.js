import React from "react";
import Head from "next/head";
import Card from "../components/Card";
import { demos } from "../constants/constants";

export default function Demos() {
  return (
    <>
      <Head>
        <title>Demos - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div class="flex flex-col justify-around uppercase max-w-3/5 pb-7">
          <h1 class="text-lg pb-4 text-gray-400 tracking-wider">Demos</h1>
          <span class="text-2xl font-bold tracking-widest">
            some demos I have worked
          </span>
        </div>
        <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased mb-4">
          {demos.map((demo, index) => {
            return <Card key={demo.title + index} {...demo} />;
          })}
        </div>
      </div>
    </>
  );
}
