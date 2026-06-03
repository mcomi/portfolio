import type { GetServerSideProps } from "next";
import { caseStudies } from "@/data/portfolio";

const baseUrl = "https://mcomix.vercel.app";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const routes = ["/", "/about", "/experience", "/work", "/skills", "/labs", "/contact"].concat(
    caseStudies.map((study) => `/work/${study.slug}`),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};
