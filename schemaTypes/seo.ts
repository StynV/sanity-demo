import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'seo',
    title: 'SEO',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title for SEO & social sharing',
            type: 'string',
            validation: (rule) => rule.min(1).max(70).required()
        }),
        defineField({
            name: 'paragraph',
            title: 'Short paragraph for SEO & sharing',
            type: 'string',
            validation: (rule) => rule.min(1).max(160).required()
        })
    ]
})