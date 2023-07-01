import { type FC } from 'react'
import Image from 'next/image'
import { Button } from '../Button/Button'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import styles from './ProductListingItem.module.scss'

export interface ProductListingItemProps {
  label: string
  title: string
  description: string
  link: string
  image: ImageStoryBlokProps
  content: {
    title: string
    image: ImageStoryBlokProps
    description: string
  }
  id: number
  full_slug: string
}

export const ProductListingItem: FC<ProductListingItemProps> = ({
  label,
  title,
  description,
  link,
  image
}) => (
  <article className={styles.container}>
    <div className={styles.grid}>
      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          src={image.filename}
          alt={image.alt}
          width={438}
          height={408}
        />
      </div>
      <div>
        {label !== '' && <span className={styles.label}>{label}</span>}
        <h2 className={styles.title}>{title}</h2>
        {description != null && (
          <p className={styles.description}>{description}</p>
        )}
        <div className={styles.button}>
          <Button link={link}>SEE PRODUCT</Button>
        </div>
      </div>
    </div>
  </article>
)
