import { type FC } from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image';
import { Icon } from '@/app/components/Icon/Icon'
import Link from 'next/link'

interface FooterProps {
  text: string;
}

export const Footer: FC<FooterProps> = ({
  text
}) => {
  const currentYear = new Date().getFullYear()

  return (
  <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <div className={styles.grid}>
        <div className={styles.column}>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt="Logo"
            width={143}
            height={25}
            />
          </Link>
        </div>
        <div className={styles.column}>
          <ul className={styles.list}>
            <li><Link className={styles.link} href='/'>Home</Link></li>
            <li><Link className={styles.link} href='/'>Headphones</Link></li>
            <li><Link className={styles.link} href='/'>Speakers</Link></li>
            <li><Link className={styles.link} href='/'>Earphones</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.text}><strong>Copyright {currentYear}. All Rights Reserved</strong></p>
        </div>
        <div className={styles.column}>
          <ul className={styles['social-list']}>
            <li>
              <Link href='/'><Icon  name="#facebook" className={styles.icon} /></Link>
            </li>
            <li>
            <Link href='/'> <Icon  name="#twitter" className={styles.icon} /></Link>
            </li>
            <li>
            <Link href='/'> <Icon  name="#instagram" className={styles.icon} /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)}
