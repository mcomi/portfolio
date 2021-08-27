import React from "react";

export default function SectionTitle({ title }) {
  return (
    <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
      {title}
    </h1>
  );
}
