import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const snippetsDirectory = join(process.cwd(), "snippets");

export function getSnippetBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(snippetsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllSnippets() {
  const slugs = getAllSnippetsFilesNames();
  const remove = getAllSnippetsTitles();
  const docs = slugs.map((slug) => getSnippetBySlug(slug));
  return docs;
}

export function getAllSnippetsFilesNames() {
  const slugs = fs.readdirSync(snippetsDirectory);
  return slugs;
}

export function getAllSnippetsTitles() {
  const slugs = getAllSnippetsFilesNames();
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

export function getAllSnippetsSlugs() {
  const filenames = getAllSnippetsFilesNames();
  const slugs = filenames.map((str) => str.split(".").slice(0, -1).join(".")); // remove the extension
  return slugs;
}
