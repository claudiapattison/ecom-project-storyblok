import { type FC } from 'react'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import Image from 'next/image'
import styles from './RelatedProducts.module.scss'

interface RelatedProductsProps extends SbBlokData {
  title: string
  text: string
  image: ImageStoryBlokProps
}

export const RelatedProducts: FC<{ blok: RelatedProductsProps }> = ({
  blok
}) => {
  console.log(blok.products)
  return (
    <section className="wrapper">
      <div className="container">
        <h2 {...storyblokEditable(blok)} className={styles.title}>
          {blok.title}
        </h2>
        <div className={styles.grid}>
          {blok.products?.map((item) => (
            <div key={item.id} className={styles.item}>
              <p>title</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
