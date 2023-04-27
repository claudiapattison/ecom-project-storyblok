// Singleton document types
import home from './home'
import {settings, footer, social} from './singletons/settings'

const singletons = [home, settings]

// Document types
import page from './documents/page'

const documents = [page]

// Object types
import hero from './objects/hero'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import moduleCallToAction from './objects/module/callToAction'
import moduleContentTextMedia from './objects/module/ContentTextMedia'

const objects = [
  hero,
  linkInternal,
  linkExternal,
  moduleCallToAction,
  moduleContentTextMedia,
]

export const schemaTypes = [...singletons, ...documents, ...objects, footer, social]

// export const schemaTypes = [page, settings, linkExternal]