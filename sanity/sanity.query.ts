import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _type,
      title,
      slug,
      mainImage {
        alt, "image": asset->url
      },
      author->{
        _id,
        slug,
        _createdAt,
        _updatedAt,
        bio,
        name,
        image {
          alt, "imageUrl": asset->url
        }
      },
      categories[]->,
      publishedAt,
      body,
    }
    `
  );
}

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _type,
      title,
      slug,
      mainImage {
        alt, "image": asset->url
      },
      author->{
        _id,
        slug,
        _createdAt,
        _updatedAt,
        bio,
        name,
        image {
          alt, "imageUrl": asset->url
        }
      },
      categories[]->,
      publishedAt,
      body,
      seo
    }`,
    { slug }
  );
}

export async function getSinglePostSEO(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      seo
    }`,
    { slug }
  );
}

export async function createCategory(title: string, description: string) {
  const result = client.create({
    _type: 'category',
    title: title,
    description: description,
  })

  console.log(result)
  return result
}