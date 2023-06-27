import { Inter } from 'next/font/google'
import {
  getStoryblokApi,
  type StoryblokClient,
  type ISbStoriesParams
} from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import styles from './page.module.css'

import '../../scss/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default async function Home(): Promise<JSX.Element> {
  const { data } = await fetchData()

  return (
    <main className={styles.main}>
      <StoryblokStory story={data.story} />
    </main>
  )
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft' }

  const storyblokApi: StoryblokClient = getStoryblokApi()
  console.log(storyblokApi)
  return storyblokApi.get('cdn/stories/home', sbParams)
}
