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

export function getAllSnippetsFilesNames() {
  const slugs = fs.readdirSync(snippetsDirectory);
  return slugs;
}

export function getAllSnippets() {
  const files = getAllSnippetsFilesNames();
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(join(snippetsDirectory, postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(/\.md$/, ""),
      },
      ...allPosts,
    ];
  }, []);
}
