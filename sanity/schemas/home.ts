import {defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

const TITLE = 'Home'

export default {
    name: 'home',
    type: 'document',
    icon: HomeIcon,
    title: 'Home',
    groups: [
      {
        default: true,
        name: 'heroTab',
        title: 'Hero',
      },
      {
        name: 'content',
        title: 'Content',
      },
      {
        name: 'seo',
        title: 'SEO',
      },
    ],
    fields: [
      defineField({
        name: 'hero',
        title: 'Hero',
        type: 'hero',
        group: 'heroTab',
      }),
      defineField({
        name: 'modules',
        title: 'Modules',
        type: 'array',
        of: [
          {type: 'module.callToAction'},
        ],
        group: 'content',
      }),
      defineField({
        options: {
          collapsed: false,
          collapsible: true,
        },
        name: 'contentTextMedia',
        title: 'Content Text Media',
        type: 'module.ContentTextMedia',
        group: 'content',
      }),
    ],
    preview: {
      prepare() {
        return {
          subtitle: 'Index',
          title: TITLE,
        }
      },
    },
  }