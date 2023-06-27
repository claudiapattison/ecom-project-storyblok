import {
  getStoryblokApi,
  type StoryblokClient,
  type ISbStoriesParams
} from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import styles from './page.module.css'

import '../../scss/styles.scss'

export default async function Home(): Promise<JSX.Element> {
  const { data } = await fetchData()

  return (
    <main className={styles.main}>
      <StoryblokStory story={data.story} />
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft' }

  const storyblokApi: StoryblokClient = getStoryblokApi()
  return storyblokApi.get('cdn/stories/home', sbParams)
}
