import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export default async function Home(): Promise<JSX.Element> {
  const { data } = await fetchData()

  return (
    <main>
      <StoryblokStory story={data.story} />
    </main>
  )
}

async function fetchData() {
  const storyblokApi: StoryblokClient = getStoryblokApi()

  const response = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
    resolve_relations: 'gridCategoryMenu.items, hero.link'
  })

  return response
}
