import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.max(20).required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      const englishTitle = title.find((translation: any) => translation._key === 'en').value
      return { ...selection, title: englishTitle }
    },
  },
})
