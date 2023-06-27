import { Inter } from 'next/font/google'
import { getStoryblokApi } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import styles from './page.module.css'
import { Hero } from './components/Hero/Hero'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'
import { ContentTextMedia } from './components/ContentTextMedia/ContentTextMedia'
import { CallToAction } from './components/CallToAction/CallToAction'

import '../../scss/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const { data } = await fetchData()

  return (
    <main className={styles.main}>
      <StoryblokStory story={data.story} />
      <div className="container">
        <CategoryMenu
          list={[
            {
              id: 1,
              title: 'Headphones',
              image: {
                src: '/placeholder/image-category-thumbnail-headphones.png',
                alt: 'Headphones'
              },
              link: '/'
            },
            {
              id: 2,
              title: 'Speakers',
              image: {
                src: '/placeholder/image-category-thumbnail-speakers.png',
                alt: 'Speakers'
              },
              link: '/'
            },
            {
              id: 3,
              title: 'Earphones',
              image: {
                src: '/placeholder/image-category-thumbnail-earphones.png',
                alt: 'Earphones'
              },
              link: '/'
            }
          ]}
        />
        <CallToAction
          title="ZX9 SPEAKER"
          text="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          link="/"
          large
          image={{
            src: '/placeholder/cta1.jpg',
            alt: 'image'
          }}
          feature
        />
        <CallToAction
          title="ZX7 SPEAKER"
          link="/"
          image={{
            src: '/placeholder/cta2.jpg',
            alt: 'image'
          }}
        />
        <CallToAction
          title="YX1 EARPHONES"
          link="/"
          spilt
          large
          image={{
            src: '/placeholder/cta3.jpg',
            alt: 'image'
          }}
        />
        <ContentTextMedia
          title="Bringing you the best audio gear"
          text="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
          image={{
            src: '/placeholder/image-best-gear.jpg',
            alt: 'image'
          }}
        />
      </div>
    </main>
  )
}

export async function fetchData() {
  const sbParams = { version: 'draft' }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get('cdn/stories/home', sbParams)
}
