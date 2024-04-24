import { PortableTextBlock } from "sanity";

export type Slug = {
    current: string,
    _type: string,
}

export type Image = {
    alt: string | null,
    image: string
}

export type TranslationString = {
    _type: string,
    _key: string,
    value: string
}

export type Author = {
    _id: string,
    _type: string,
    _createdAt: string,
    _updatedAt: string,
    name: TranslationString[],
    bio: PortableTextBlock[],
    slug: Slug,
    image: Image
}

export type Category = {
    _id: string,
    _rev: string,
    _type: string,
    _createdAt: string,
    _updatedAt: string,
    title: TranslationString[],
    description: string
}

export type SEO = {
    title: string,
    paragraph: string
}

export type Post = {
    _id: string,
    _type: string,
    title: TranslationString[],
    slug: Slug,
    mainImage: Image,
    author: Author,
    categories: Category[],
    publishedAt: string,
    body: string,
    seo: SEO
}