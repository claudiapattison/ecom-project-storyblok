import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'

export default async function ProductPage(context: {
  params: { slug: string }
}): Promise<JSX.Element> {
  return (
    <main>
      <h1>Produt</h1>
      <h1>Produt</h1>

      <h1>Produt</h1>

      <h1>Produt</h1>

      <h1>Produt</h1>
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
