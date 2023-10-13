import { type FC } from 'react'
import styles from './HeroPage.module.scss'

export interface HeroPageProps {
  title: string
}
export const HeroPage: FC<HeroPageProps> = ({ title }) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
  </section>
)
