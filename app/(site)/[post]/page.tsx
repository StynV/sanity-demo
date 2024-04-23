import { getSinglePost } from "@/sanity/sanity.query";
import { Post } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {
        post: string;
    };
};

export default async function PostDetail({ params }: Props) {
    const slug = params.post;
    const post: Post = await getSinglePost(slug);
    const { mainImage } = post

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">

            <article key={post._id}>
                <h1 className="text-4xl">{post.title}</h1>

                <Image
                    alt={mainImage.alt ?? ''}
                    src={mainImage.image}
                    width={100}
                    height={100}
                    className="w-full h-full"
                />

                <PortableText value={post.author.bio} />
            </article>
        </main>
    );
}
