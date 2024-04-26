import { defineField, defineType } from 'sanity'
import seo from './seo'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      options: {
        aiAssist: {
          translateAction: true
        }
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ],
    }),
    defineField({
      name: 'aiImage',
      title: 'AI image',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageInstructionField: 'promptForImage',
        },
      },
      fields: [
        {
          name: 'promptForImage',
          title: 'Image prompt',
          type: 'string',
        }
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, author } = selection
      const englishTitle = title.find((translation: any) => translation._key === 'en').value
      const englishAuthor = author.find((translation: any) => translation._key === 'en').value
      return { ...selection, title: englishTitle, subtitle: englishAuthor && `by ${englishAuthor}` }
    },
  },
})
