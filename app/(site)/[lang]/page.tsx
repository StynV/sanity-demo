import Form from "@/components/Form";
import { getPosts } from "@/sanity/sanity.query";
import { Post } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params
  const posts: Post[] = await getPosts(lang);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      {posts.map(post => {
        console.log(post.title)

        return (
          <article key={post._id}>
            <Link href={`${lang}/posts/${post.slug.current}`}>
              <h1 className="text-4xl">{post.title}</h1>
            </Link>

            <PortableText value={post.author.bio} />
          </article>
        )
      })}

      <h2 className="text-3xl mt-10">Add category</h2>

      <Form />
    </main>
  );
}
