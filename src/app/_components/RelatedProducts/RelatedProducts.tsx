import { type FC } from 'react'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import styles from './RelatedProducts.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button/Button'
interface RelatedProductsProps extends SbBlokData {
  title: string
  products: ProductsProps[]
}
interface ProductsProps {
  id: string
  content: {
    title: string
    image: ImageStoryBlokProps
  }
  full_slug: string
}

export const RelatedProducts: FC<{ blok: RelatedProductsProps }> = ({
  blok
}) => {
  return (
    <section className="wrapper">
      <div className="container">
        <h2 {...storyblokEditable(blok)} className={styles.title}>
          {blok.title}
        </h2>

        <div className={styles.grid}>
          {blok.products?.map((item) => {
            const slug = `/${item.full_slug}`
            const image = item.content.image
            return (
              <div key={item.id} className={styles.item}>
                <Link href={slug}>
                  <div className={styles['image-container']}>
                    <Image
                      src={image.filename}
                      alt={image.alt}
                      width={175}
                      height={194}
                      className={styles.image}
                    />
                  </div>
                </Link>
                <h3 className={styles['item-title']}>{item.content.title}</h3>
                <Button link={slug}>See Product</Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
