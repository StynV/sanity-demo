import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity-demo-cms',

  projectId: 'ef3sly4d',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
