import fs from "fs/promises";
import path from "path";

import dynamic from "next/dynamic";
import { getBlogPostMetadata } from "../_lib/getBlogPostData";

import type { Metadata } from "next/types";
type BlogPageProps = { params: { slug: string } };

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const BlogMarkdown = dynamic(() => import(`@/app/mdx-articles/${slug}.mdx`));
  return (
    <div className="max-w-4xl m-auto my-24 text-lg p-4">
      <BlogMarkdown />
    </div>
  );
}

export async function generateStaticParams() {
  const articlesPath = path.join(process.cwd(), "/src/app/mdx-articles");
  const files = await fs.readdir(articlesPath);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getBlogPostMetadata(slug);

  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${params.slug}`);
  }
}
