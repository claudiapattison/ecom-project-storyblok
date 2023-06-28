import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export default async function CategoryPage(context: {
  params: { slug: string }
}): Promise<JSX.Element> {
  const { data } = await fetchData(context)
  const { slug } = context.params
  return (
    <main>
      <h1>{slug}</h1>
      {data.story !== null && <StoryblokStory story={data.story} />}
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchData(context: { params: { slug: string } }) {
  const { slug } = context.params

  const storyblokApi: StoryblokClient = getStoryblokApi()

  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft'
  })

  return response
}
