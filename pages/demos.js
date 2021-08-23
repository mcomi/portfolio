import React from "react";
import Head from "next/head";
import Card from "../components/Card";

export default function Demos() {
  return (
    <>
      <Head>
        <title>Demos - Manuel Comi Xolot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Demos Page</h1>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased mb-4">
        {/* {[1, 2, 3, 4, 5].map((item) => {
          return <Card />;
        })} */}
      </div>
    </>
  );
}
