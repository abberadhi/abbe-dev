import { notFound } from "next/navigation";

export type BlogPostMetadata = {
  title: string;
  description: string;
  date?: string;
};

export type BlogPostData = {
  slug: string;
  metadata: BlogPostMetadata;
};

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
  try {
    const file = await import("../../mdx-articles/" + slug + ".mdx");

    if (file?.metadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      file.metadata.title = file.metadata.title + " | < Abbe />";

      return {
        slug,
        metadata: file.metadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}
