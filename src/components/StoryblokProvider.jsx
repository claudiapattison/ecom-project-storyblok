'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Grid from './grid';
import Page from './page';
import Feature from './Feature'
import Teaser from './Teaser'
import Hero from '../app/components/Hero/Hero';

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: 'HAhQiRUwaIYEaJfUHWncWgtt',
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    hero: Hero
  },
})

export default function StoryblokProvider({ children }) {
  return children;
}
