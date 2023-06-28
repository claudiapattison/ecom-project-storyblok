import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
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
  const storyblokApi: StoryblokClient = getStoryblokApi()

  const response = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
    resolve_relations: 'gridCategoryMenu.items'
  })

  return response
}
