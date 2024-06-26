import Form from "@/components/Form";
import { getPosts } from "@/sanity/sanity.query";
import { Post } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params
  const posts: Post[] = await getPosts(lang);

  return (
    <main className="flex flex-col items-start p-24 bg-blue-100 text-black gap-10">
      {posts.map(post => {
        return (
          <article key={post._id} className="bg-white w-full rounded-md p-10">
            <Link href={`${lang}/posts/${post.slug.current}`}>
              <h1 className="text-4xl mb-4">{post.title}</h1>

              <PortableText value={post.author.bio} />
            </Link>
          </article>
        )
      })}

      <div className="mb-10 self-center">
        <h2 className="text-3xl mt-10 mb-4">Add category</h2>

        <Form />
      </div>
    </main>
  );
}
