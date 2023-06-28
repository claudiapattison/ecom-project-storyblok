'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from './Page';
import Hero from '../app/components/Hero/Hero';
import { ContentTextMedia } from '../app/components/ContentTextMedia/ContentTextMedia';
import { CallToAction } from '@/app/components/CallToAction/CallToAction';
import { CallToActionGrid } from '@/app/components/CallToActionGrid/CallToActionGrid';
import { CategoryMenu } from '@/app/components/CategoryMenu/CategoryMenu';
import { CategoryItem } from '@/app/components/CategoryItem/CategoryItem';

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: 'HAhQiRUwaIYEaJfUHWncWgtt',
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    contentTextMedia: ContentTextMedia,
    callToAction: CallToAction,
    gridCallToAction: CallToActionGrid,
    gridCategoryMenu: CategoryMenu,
    category: CategoryItem
  },
})

export default function StoryblokProvider({ children }) {
  return children;
}
