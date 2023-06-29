import { type FC } from 'react'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToAction.module.scss'
import { Button } from '@/app/_components/Button/Button'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

interface CallToActionProps extends SbBlokData {
  title: string
  text?: string
  link: string
  spilt?: boolean
  image?: ImageStoryBlokProps
  feature?: boolean
}

export const CallToAction: FC<{ blok: CallToActionProps }> = ({ blok }) => (
  <Link
    href="/"
    className={`${styles.container} ${
      blok.feature ? styles['container--feature'] : ''
    } ${blok.spilt ? styles['container--spilt'] : ''}`}
  >
    {blok.image != null && (
      <div className={styles['image-container']}>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          className={styles.image}
        />
      </div>
    )}

    <div className={styles.content}>
      <h2 {...storyblokEditable(blok)} className={styles.title}>
        {blok.title}
      </h2>
      {blok.text != null && (
        <p {...storyblokEditable(blok)} className={styles.text}>
          {blok.text}
        </p>
      )}
      <Button variant="secondary">See Product</Button>
    </div>
  </Link>
)
