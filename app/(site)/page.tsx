import { getPosts } from "@/sanity/sanity.query";
import { Post } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      {posts.map(post => {
        const { mainImage } = post

        return (
          <article key={post._id}>
            <Link href={post.slug.current}>
              <h1 className="text-4xl">{post.title}</h1>
            </Link>

            <PortableText value={post.author.bio} />
          </article>
        )
      })}
    </main>
  );
}
