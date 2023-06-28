import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'
import { Icon } from '@/app/components/Icon/Icon'

interface FooterProps {
  text: string
  facebook: string
  twitter: string
  instagram: string
}

export const Footer: FC<FooterProps> = ({
  text,
  facebook,
  twitter,
  instagram
}) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={143} height={25} />
            </Link>
          </div>
          <div className={styles.column}>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Headphones
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Speakers
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>
              <strong>Copyright {currentYear}. All Rights Reserved</strong>
            </p>
          </div>
          <div className={styles.column}>
            <ul className={styles['social-list']}>
              <li>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <Icon name="#facebook" className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <Icon name="#twitter" className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <Icon name="#instagram" className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
