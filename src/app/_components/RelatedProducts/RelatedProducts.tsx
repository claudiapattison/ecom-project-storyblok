import { type FC } from 'react'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import styles from './RelatedProducts.module.scss'

interface RelatedProductsProps extends SbBlokData {
  title: string
  text: string
  image: ImageStoryBlokProps
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
        <div className={styles.grid}></div>
      </div>
    </section>
  )
}
