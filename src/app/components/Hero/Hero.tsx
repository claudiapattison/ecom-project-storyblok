import { type FC } from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image';
import { Button } from '@/app/components/Button/Button'

interface HeroProps {
  label: string;
  title: string;
  text: string;
}

export const Hero: FC<HeroProps> = ({
  label,
  title,
  text
}) => {

  return (
  <div className={styles.hero}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.label}>{label}</span>
          <h1>{title}</h1>
          <p className={styles.text}>{text}</p>
          <Button variant='primary' link='/'>See Product</Button>
        </div>
        <div className={styles['image-container']}>
        <Image
          src='/placeholder/hero.jpg'
          alt="Logo"
          fill
          className={styles.image}
          />
        </div>
      </div>
    </div>
  </div>
)}
