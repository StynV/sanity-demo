import { getSinglePost, getSinglePostSEO } from "@/sanity/sanity.query";
import { Post } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

type Props = {
    params: {
        post: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.post;
    const post: Post = await getSinglePostSEO(slug);

    return {
        title: post?.seo.title,
        description: post?.seo.paragraph,
    }
}

export default async function PostDetail({ params }: Props) {
    const slug = params.post;
    const post: Post = await getSinglePost(slug);
    if (post) {
        const { mainImage } = post

        return (
            <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
                <article key={post._id}>
                    <h1 className="text-4xl">{post.title[0].value}</h1>

                    {mainImage &&
                        <Image
                            alt={mainImage.alt ?? ''}
                            src={mainImage.image}
                            width={100}
                            height={100}
                            className="w-full h-full"
                        />
                    }

                    <PortableText value={post.author.bio} />
                </article>
            </main>
        );
    }

    return <></>

}
