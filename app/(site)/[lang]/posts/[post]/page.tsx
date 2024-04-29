import { getSinglePost, getSinglePostSEO } from "@/sanity/sanity.query";
import { Post } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

type Props = {
    params: {
        post: string;
        lang: string
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
    const { lang } = params
    const post: Post = await getSinglePost(slug, lang);

    if (post) {
        const { mainImage } = post

        const authorName = post.author.name.find(value => value._key === lang)?.value

        return (
            <main className="flex min-h-screen flex-col items-start p-24 bg-blue-100 text-black">
                <article key={post._id} className="bg-white w-full p-10">
                    <h1 className="text-4xl mb-4">{post.title}</h1>

                    {mainImage &&
                        <Image
                            alt={mainImage.alt ?? ''}
                            src={mainImage.image}
                            width={100}
                            height={100}
                            className="mb-4"
                            priority
                        />
                    }

                    {authorName && <p>{authorName}</p>}
                </article>
            </main>
        );
    }

    return <></>

}
