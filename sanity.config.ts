import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Ecom Project',

  projectId: '8pihc9h7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
})
