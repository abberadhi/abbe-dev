import { BlogPostData } from "@/app/types/articleData";
import { readdir } from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
  try {
    const file = await import("../../mdx-articles/" + slug + ".mdx");

    if (file?.metadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      file.metadata.title = file.metadata.title;

      return {
        slug,
        metadata: file.metadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error?.message);
    } else {
      console.error(error);
    }
    return notFound();
  }
}

export const getPostsMetaData = async () => {
  const posts: BlogPostData[] = [];
  const articlesPath = path.join(process.cwd(), "/src/app/mdx-articles");

  const files = await readdir(articlesPath);

  for (const fileName of files) {
    const metadata = await getBlogPostMetadata(fileName.split(".")[0]);
    posts.push(metadata);
  }

  return posts;
};
