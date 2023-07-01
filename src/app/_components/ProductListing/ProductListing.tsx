import { type FC } from 'react'
import Image from 'next/image'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import { ProductListingItem } from '../ProductListingItem/ProductListingItem'

export interface ProductListingProps {
  products: ProductListingItemProps[]
}

export interface ProductListingItemProps {
  content: {
    title: string
    image: ImageStoryBlokProps
    description: string
  }
  id: number
  full_slug: string
}

export const ProductListing: FC<ProductListingProps> = ({ products }) => (
  <section>
    <div className="container">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductListingItem
            label={product.content.label}
            title={product.content.title}
            description={product.content.description}
            link={product.full_slug}
            image={product.content.image}
          />
        </div>
      ))}
    </div>
  </section>
)
