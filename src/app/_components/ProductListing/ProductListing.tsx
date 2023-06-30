import { type FC } from 'react'
import Image from 'next/image'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

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
          <h3>{product.content.title}</h3>
          <p>{product.content.description}</p>
          <span>{product.full_slug}</span>
          <Image
            src={product.content.image.filename}
            alt={product.content.image.alt}
            width={438}
            height={408}
          />
        </div>
      ))}
    </div>
  </section>
)
