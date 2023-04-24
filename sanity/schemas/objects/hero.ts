import {defineField} from 'sanity'

export default defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField(
      {
        name: 'label',
        title: 'Label',
        type: 'text',
        rows: 1,
      }),
    defineField(
      {
        name: 'title',
        title: 'Title',
        type: 'text',
        rows: 3,
      },
    ),
    defineField(
      {
        name: 'text',
        title: 'Text',
        type: 'text',
        rows: 3,
      }
    ),
    defineField({
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }
      ]
    }),
    defineField({
      title: 'Image Desktop',
      name: 'imageDesktop',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }
      ]
    }),
  ],
})
