import { type FC } from 'react'
import styles from './Footer.module.scss'

interface FooterProps {
  title: string;
}

export const Footer: FC<FooterProps> = ({
  title
}) => (
  <footer className={styles.container}>
    <div className="container">
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
    </div>
  </footer>
)
