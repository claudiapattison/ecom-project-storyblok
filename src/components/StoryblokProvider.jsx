'use client'

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from './Page';

import { Hero } from '../app/_components/Hero/Hero';
import { ContentTextMedia } from '../app/_components/ContentTextMedia/ContentTextMedia';
import { CallToAction } from '@/app/_components/CallToAction/CallToAction';
import { CallToActionGrid } from '@/app/_components/CallToActionGrid/CallToActionGrid';
import { CategoryMenu } from '@/app/_components/CategoryMenu/CategoryMenu';
import { ImageGallery } from '../app/_components/ImageGallery/ImageGallery';
import { RelatedProducts } from '@/app/_components/RelatedProducts/RelatedProducts';
import { ProductFeatures } from '@/app/_components/ProductFeatures/ProductFeatures';


/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_URL,
  use: [apiPlugin],
  components: {
    page: Page,
    category: Page,
    product: Page,
    hero: Hero,
    contentTextMedia: ContentTextMedia,
    callToAction: CallToAction,
    gridCallToAction: CallToActionGrid,
    gridCategoryMenu: CategoryMenu,
    imageGallery: ImageGallery,
    relatedProducts: RelatedProducts,
    productFeatures: ProductFeatures
  },
})

export default function StoryblokProvider({ children }) {
  return children;
}
