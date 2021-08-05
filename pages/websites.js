import React from "react";
import Card from "./components/Card";

export default function Websites() {
  return (
    <div>
      <h1 className="text-2xl my-3">Websites</h1>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased mb-4">
        {[1, 2, 3, 4, 5].map((item) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}
