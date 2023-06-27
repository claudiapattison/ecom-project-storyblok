import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToAction.module.scss'
import { type ImageProps, LinkProps } from '../../../../interfaces/common'
import { Button } from '@/app/components/Button/Button'
import { Icon } from '@/app/components/Icon/Icon'

interface CallToActionProps {
  title: string
  text?: string
  link: string
  large?: boolean
  spilt?: boolean
  image?: ImageProps
  feature?: boolean
}

export const CallToAction: FC<CallToActionProps> = ({
  title,
  text,
  link,
  large,
  spilt,
  feature,
  image
}) => (
  <Link
    href={link}
    className={`${styles.container} ${
      feature ? styles['container--feature'] : ''
    } ${spilt ? styles['container--spilt'] : ''}`}
  >
    {image != null && (
      <div className={styles['image-container']}>
        <Image src={image.src} alt={image.alt} fill className={styles.image} />
      </div>
    )}

    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      {text != null && <p className={styles.text}>{text}</p>}
      <Button variant="secondary">See Product</Button>
    </div>
  </Link>
)
