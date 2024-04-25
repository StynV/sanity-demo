import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { assist } from '@sanity/assist'

export default defineConfig({
  name: 'default',
  title: 'sanity-demo-cms',

  projectId: 'ef3sly4d',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'fr', title: 'French' }
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
    assist({
      translate: {
        field: {
          documentTypes: ['post', 'category', 'author'],
          languages: [
            { id: 'en', title: 'English' },
            { id: 'de', title: 'French' },
          ],
        },
      },
    })
  ],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
