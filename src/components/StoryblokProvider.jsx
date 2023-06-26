/** 1. Tag it as a client component */

'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from '../app/page'

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: 'HAhQiRUwaIYEaJfUHWncWgtt',
  use: [apiPlugin],
  components: {
    page: Page,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
