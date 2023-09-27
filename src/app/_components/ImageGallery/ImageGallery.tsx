import { type FC } from 'react'
import { type SbBlokData } from '@storyblok/react'
import Image from 'next/image'
import styles from './ImageGallery.module.scss'

interface ImageGalleryProps extends SbBlokData {
  Images: ImageProps[]
}

interface ImageProps {
  id: number
  filename: string
  alt: string
}

export const ImageGallery: FC<{ blok: ImageGalleryProps }> = ({ blok }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <ul className={styles.grid}>
          {blok.Images?.map((item) => (
            <li key={item.id} className={styles.item}>
              <Image
                src={item.filename}
                alt={item.alt}
                fill
                sizes="(max-width: 1200px) 100vw"
                className={styles.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
