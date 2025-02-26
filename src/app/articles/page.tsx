import Link from "next/link";
import { BlogPostData } from "../types/articleData";
import { getPostsMetaData } from "./_lib/getBlogPostData";
import { TitlePageBreak } from "../components/title-page-break";

export default async function ArticlePage() {
  const posts: BlogPostData[] = await getPostsMetaData();

  return (
    <div className="max-w-4xl m-auto my-24 text-lg p-4">
      <TitlePageBreak title="Articles"></TitlePageBreak>
      {/* <h1 className="text-3xl mt-12 font-semibold">My Blog Posts</h1>
      {posts[0].slug} */}
      <div className="flex flex-col gap-4 my-8">
        {posts.map((post, index) => (
          <Link key={index} href={`articles/` + post.slug}>
            <div className="p-4 border-l-2 text-left hover:border-[#d1716b]">
              <p className="italic text-xs">{post.metadata.publishDate}</p>
              <h2 className="text-xl font-semibold">{post.metadata.title}</h2>
              {/* <p className="font-thin">{post.metadata.authors[0].name}</p> */}
              <p className="font-thin">{post.metadata.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
