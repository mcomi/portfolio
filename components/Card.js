import React from "react";

export default function Card() {
  return (
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-125 transform duration-500 hover:-translate-y-2 cursor-pointer group"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900)`,
      }}
    >
      <div className="bg-black bg-opacity-20 min-h-125 px-10 flex flex-wrap flex-col pt-72 hover:bg-opacity-75 transform duration-300">
        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
          Website X
        </h1>
        <div className="w-32 h-1 bg-blue-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
        <p className="opacity-0 text-white text-md group-hover:opacity-80 transform duration-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          beatae!
          <span className="mt-2 test-sm block font-thin">
            HTML & CSS | Javascript
          </span>
        </p>
      </div>
    </article>
  );
}
