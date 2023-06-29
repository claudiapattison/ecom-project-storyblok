import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CategoryItem.module.scss'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import { Icon } from '@/app/_components/Icon/Icon'

export interface CategoryItemProps {
  title: string
  link: string
  image: ImageStoryBlokProps
}

export const CategoryItem: FC<CategoryItemProps> = ({ title, image, link }) => (
  <Link href={link} className={styles.link}>
    <div className={styles.content}>
      <Image
        src={image.filename}
        alt={image.alt}
        width={438}
        height={408}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.label}>
        Shop
        <Icon name="#arrow-right" className={styles.icon} />
      </span>
    </div>
  </Link>
)
