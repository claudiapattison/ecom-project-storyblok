import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProductIntro.module.scss'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

interface ProductIntroProps {
  title: string
  image: ImageStoryBlokProps
  price: number
  description: string
}

export const ProductIntro: FC<ProductIntroProps> = ({
  title,
  image,
  price,
  description
}) => (
  <section className={styles.container}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles['image-container']}>
          <Image
            src={image.filename}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            alt={image.alt}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </section>
)
