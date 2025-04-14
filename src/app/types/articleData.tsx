import { Author } from "next/dist/lib/metadata/types/metadata-types";

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string;
  authors: Author[];
  publishDate: string;
};

export type BlogPostData = {
  slug: string;
  metadata: BlogPostMetadata;
};
