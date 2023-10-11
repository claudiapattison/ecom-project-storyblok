import { type FC } from 'react'
import Image from 'next/image'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import styles from './ContentTextMedia.module.scss'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

export interface ContentTextMediaProps extends SbBlokData {
  title: string
  text: string
  image: ImageStoryBlokProps
}

export const ContentTextMedia: FC<{ blok: ContentTextMediaProps }> = ({
  blok
}) => (
  <section className="wrapper">
    <div className="container">
      <div className={styles.grid}>
        <div className={styles['image-container']}>
          {blok.image && blok.image.filename && (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              fill
              sizes="(max-width: 1200px) 100vw"
              className={styles.image}
            />
          )}
        </div>
        <div className={styles.content}>
          <h2 {...storyblokEditable(blok)} className={styles.title}>
            {blok.title}
          </h2>
          <p {...storyblokEditable(blok)} className={styles.text}>
            {blok.text}
          </p>
        </div>
      </div>
    </div>
  </section>
)
