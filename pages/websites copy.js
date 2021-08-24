import React from "react";
import Card from "../components/Card";
import Image from "next/image";
import { demos } from "../constants/constants";

export default function Websites() {
  return (
    <div>
      <div class="flex flex-col justify-around uppercase max-w-3/5 pb-7">
        <h1 class="text-lg pb-4 text-gray-400 tracking-wider">Websites</h1>
        <span class="text-2xl font-bold tracking-widest">
          what i have done?
        </span>
      </div>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased mb-4">
        {demos.map((website, index) => {
          return <Card key={demo.title + index} {...demo} />;
        })}
      </div>
    </div>
  );
}
