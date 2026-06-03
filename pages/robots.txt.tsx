import type { GetServerSideProps } from "next";

export default function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Allow: /
Sitemap: https://mcomix.vercel.app/sitemap.xml
`);
  res.end();

  return { props: {} };
};
