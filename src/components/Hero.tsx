import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type FC } from 'react'

export interface HeroProps extends SbBlokData {
  label: string
  title: string
  text: string
}

const Hero: FC<{ blok: HeroProps }> = ({ blok }) => (
  <div className={styles.hero}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.label}>{label}</span>
          <h1 {...storyblokEditable(blok)}>{blok.title}</h1>
          <p className={styles.text}>{text}</p>
          <Button variant="primary" link="/">
            See Product
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
              srcSet="/placeholder/hero.jpg"
            />
            <Image
              src="/cutups/hero.jpg"
              fill
              priority
              alt="Image"
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
