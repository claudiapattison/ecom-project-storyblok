import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import { HeroPage } from '../_components/HeroPage/HeroPage'
import { ProductListing } from '../_components/ProductListing/ProductListing'

export default async function CategoryPage(context: {
  params: { slug: string }
}): Promise<JSX.Element> {
  const { data, products } = await fetchData(context)

  return (
    <main>
      <HeroPage title={data.data.story.content.title} />
      <ProductListing products={products} />

      {data.data.story !== null && <StoryblokStory story={data.data.story} />}
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchData(context: { params: { slug: string } }) {
  const { slug } = context.params

  const storyblokApi: StoryblokClient = getStoryblokApi()

  const data = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
    resolve_relations: 'gridCategoryMenu.items'
  })

  const products = await storyblokApi.getAll(`cdn/stories`, {
    version: 'draft',
    starts_with: `${slug}/product/`
  })

  return { data, products }
}
