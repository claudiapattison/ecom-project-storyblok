import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'audiophileclaudia.myshopify.com',
  storefrontAccessToken: 'a4d6d1be70d55a44f1eca51b71f344f1'
})

export default async function ProductPage(context: {
  params: { slug: string }
}): Promise<JSX.Element> {
  const products = await client.product.fetchAll()
  console.log(products)
  return (
    <main>
      <h1>Produt</h1>

      <ul>
        {products.map((product) => (
          <li>
            <h2>{product.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  )
}
