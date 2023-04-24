import {CogIcon, PackageIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
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
      type: 'object',
      group: 'footerContent',
      fields: [
        {
            name: 'text',
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
    }),
    defineField({
        name: 'social',
        title: 'Social',
        type: 'object',
        group: 'socialContent',
        fields: [
          {
            title: 'Facebook',
            name: 'facebook',
            type: 'string'
          },
          {
            title: 'Twitter',
            name: 'twitter',
            type: 'string'
          },
          {
            title: 'Instagram',
            name: 'instagram',
            type: 'string'
          },
     
        ],
      }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
