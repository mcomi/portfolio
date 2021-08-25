import React from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { websites } from "../constants/constants";

export default function Websites() {
  return (
    <>
      <Head>
        <title>Websites - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div class="flex flex-col justify-around uppercase max-w-3/5 pb-7">
          <h1 class="text-lg pb-4 text-gray-400 tracking-wider">Websites</h1>
          <span class="text-2xl font-bold tracking-widest">
            what i have done?
          </span>
        </div>
        <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased mb-4">
          {websites.map((website, index) => {
            return <Card key={website.title + index} {...website} />;
          })}
        </div>
      </Layout>
    </>
  );
}
