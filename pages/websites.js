import React from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { websites } from "../constants/constants";

export default function Websites() {
  return (
    <Layout title="Websites - Manuel Comi" description="My web design projects">
      <div className="items-start max-w-3xl mx-auto mb-16">
        <div className="flex flex-col justify-around max-w-3/5 pb-7">
          <SectionTitle title="Websites" />
          <p className="lg:text-lg py-3">
            I have worked on a some web design projects, SEO, analytics and even
            Google Business configuration.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-10 antialiased mb-4">
          {websites.map((website, index) => {
            return <Card key={website.title + index} {...website} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
