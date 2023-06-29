import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import { HeroPage } from '../_components/HeroPage/HeroPage'

export default async function CategoryPage(context: {
  params: { slug: string }
}): Promise<JSX.Element> {
  const { data } = await fetchData(context)

  return (
    <main>
      <HeroPage title={data.story.content.title} />
      {data.story !== null && <StoryblokStory story={data.story} />}
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchData(context: { params: { slug: string } }) {
  const { slug } = context.params

  const storyblokApi: StoryblokClient = getStoryblokApi()

  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
    resolve_relations: 'gridCategoryMenu.items'
  })

  return response
}
