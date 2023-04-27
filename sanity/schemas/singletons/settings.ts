import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const footer = defineType({
  name: 'footer',
  type: 'object',
  fields: [
    {
      name: 'footerText',
      title: 'Text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'text',
      rows: 1,
    },
  ],
})

export const social = defineType({
    name: 'social',
    title: 'social',
    type: 'object',
    fields: [
      {
        name: 'facebook',
        title: 'Facebook',
        type: 'string',
      },
      {
        name: 'twitter',
        title: 'Twitter',
        type: 'string',
      },
      {
        name: 'instagram',
        title: 'Instagram',
        type: 'string',
      },
    ],
  })
  

export const settings =  defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'footerContent',
      title: 'Footer',
    },
    {
      name: 'socialContent',
      title: 'Social',
    },
  ],
  fields: [
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'footerContent',
    }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'social',
      group: 'socialContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
