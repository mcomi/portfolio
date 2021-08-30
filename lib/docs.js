import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(join(root, "data", type));
}

export function getDocBySlug(type, slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(root, "data", type, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs(type) {
  const files = fs.readdirSync(join(root, "data", type));
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(join(root, "data", type, postSlug), "utf8");
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
