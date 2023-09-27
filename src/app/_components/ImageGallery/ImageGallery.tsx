import { type FC } from 'react'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'
import Image from 'next/image'
import styles from './ImageGallery.module.scss'

interface ImageGalleryProps extends SbBlokData {
  title: string
  text: string
  image: ImageStoryBlokProps
}

export const ImageGallery: FC<{ blok: ImageGalleryProps }> = ({ blok }) => {
  console.log(blok.Images)
  return (
    <div className="wrapper">
      <div className="container">
        <ul className={styles.grid}>
          {blok.Images?.map((item) => (
            // eslint-disable-next-line no-underscore-dangle
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
