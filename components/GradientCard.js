import React from "react";
import NextLink from "next/link";
import Image from "next/image";

export default function GradientCard({ title, description, image, tone, url }) {
  const toneGradients = {
    blue: "from-cyan to-light-blue",
    yellow: "from-yellow-400 to-orange-500",
    orange: "from-orange to-pink-600",
    green: "from-green-400 to-cyan-500",
  };
  return (
    <NextLink href={url}>
      <div
        className={`bg-gradient-to-br ${toneGradients[tone]} p-8 rounded-md`}
      >
        <h3 className="text-2xl font-bold text-left mt-1 text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-100">{description}</p>
        <div class="h-32 mt-5 -mb-8 text-right relative md:pl-6 xl:pl-8 hidden sm:flex sm:items-end">
          <Image alt={title} layout="fill" src={`/images/${image}`} />
        </div>
      </div>
    </NextLink>
  );
}
