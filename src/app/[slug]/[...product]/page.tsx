import Client from 'shopify-buy'
import { getStoryblokApi, type StoryblokClient } from '@storyblok/react/rsc'
import StoryblokStory from '@storyblok/react/story'
import { CategoryMenu } from '@/app/_components/CategoryMenu2/CategoryMenu'
import { ProductFeatures } from '@/app/_components/ProductFeatures/ProductFeatures'

const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN
const shopifyAccess = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!shopifyDomain || !shopifyAccess) {
  throw new Error('Required environment variables are not defined')
}

const client = Client.buildClient({
  domain: shopifyDomain,
  storefrontAccessToken: shopifyAccess,
  apiVersion: ''
})

export default async function ProductPage(context: {
  params: { slug: string; product: string }
}): Promise<JSX.Element> {
  const { data, collections } = await fetchData(context)

  const shopifyApi = data.data.story.content.shopifyID
  // const products = await client.product.fetchAll()
  const products = await client.product.fetch(shopifyApi)

  return (
    <main>
      <h1>{data.data.story.content.title}</h1>
      <p>this is {products.variants[0].price.amount}</p>
      <p> {products.description}</p>

      <ProductFeatures features={data.data.story.content.features} />
      <CategoryMenu category={collections} />

      {data.story !== null && <StoryblokStory story={data.data.story} />}
    </main>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchData(context: {
  params: { slug: string; product: string }
}) {
  const { slug } = context.params
  const { product } = context.params

  const storyblokApi: StoryblokClient = getStoryblokApi()

  const data = await storyblokApi.get(
    `cdn/stories/${slug}/product/${product[1]}`,
    {
      version: 'draft',
      resolve_relations: 'gridCategoryMenu.items'
    }
  )

  const collections = await storyblokApi.getAll(`cdn/stories`, {
    content_type: 'category',
    version: 'draft',
    resolve_relations: 'gridCategoryMenu.items'
  })

  return { data, collections }
}
