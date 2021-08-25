import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const docsDirectory = join(process.cwd(), "docs");
const snippetsDirectory = join(process.cwd(), "snippets");

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = getAllDocsFilesNames();
  const remove = getAllDocsTitles();
  const docs = slugs.map((slug) => getDocBySlug(slug));
  return docs;
}

export function getAllDocsFilesNames() {
  const slugs = fs.readdirSync(docsDirectory);
  return slugs;
}

export function getAllDocsTitles() {
  const slugs = getAllDocsFilesNames();
  const cleanTitles = slugs.map((str) =>
    str
      .split(".")
      .slice(0, -1)
      .join(".") // remove the extension
      .replace(/-/g, " ") // remove hyphens with empty space
      .toLowerCase()
      .split(" ") // split words in string
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1)) // capitalize each word
      .join(" ")
  );
  return cleanTitles;
}

export function getAllDocsSlugs() {
  const filenames = getAllDocsFilesNames();
  const slugs = filenames.map((str) => str.split(".").slice(0, -1).join(".")); // remove the extension
  return slugs;
}
