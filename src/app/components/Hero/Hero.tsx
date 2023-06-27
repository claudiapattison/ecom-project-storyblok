import { type FC } from 'react'
import Image from 'next/image'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import styles from './Hero.module.scss'
import { Button } from '@/app/components/Button/Button'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

export interface HeroProps extends SbBlokData {
  label: string
  title: string
  text: string
  link: string
  image: ImageStoryBlokProps
  imageMobile: ImageStoryBlokProps
}

const Hero: FC<{ blok: HeroProps }> = ({ blok }) => (
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
          <Button variant="primary" link="/">
            <span {...storyblokEditable(blok)}>{blok.link.slug}</span>
          </Button>
        </div>
        <div className={styles['image-container']}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/placeholder/hero-desktop.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcSet={blok.imageMobile.filename}
            />
            <Image
              src={blok.image.filename}
              fill
              priority
              alt={blok.image.alt}
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
