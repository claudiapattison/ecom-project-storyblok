import { type FC } from 'react'
import Image from 'next/image'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import styles from './Hero.module.scss'
import { Button } from '@/app/_components/Button/Button'
import {
  type ImageStoryBlokProps,
  LinkStoryBlokProps
} from '../../../../interfaces/common'

export interface HeroProps extends SbBlokData {
  label: string
  title: string
  text: string
  link: LinkStoryBlokProps
  image: ImageStoryBlokProps
  imageMobile: ImageStoryBlokProps
}

export const Hero: FC<{ blok: HeroProps }> = ({ blok }) => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span {...storyblokEditable(blok)} className={styles.label}>
              {blok.label}
            </span>
            <h1 {...storyblokEditable(blok)}>{blok.title}</h1>
            <p {...storyblokEditable(blok)} className={styles.text}>
              {blok.text}
            </p>
            <Button link={blok.link.cached_url}>See product</Button>
          </div>
          <picture className={styles['image-container']}>
            <source
              media="(max-width: 1024px)"
              srcSet={blok.imageMobile.filename}
            />
            <Image
              src={blok.image.filename}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              alt={blok.image.alt}
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
