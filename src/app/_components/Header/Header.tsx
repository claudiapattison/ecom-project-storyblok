import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

interface HeaderProps {
  navigation: NavigationProps[]
}

interface NavigationProps {
  id: number
  slug: string
  name: string
}

export const Header: FC<HeaderProps> = ({ navigation }) => (
  <header className={styles.header}>
    <div className={`container ${styles.container}`}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={143} height={25} />
          </Link>
        </div>
        <div className={styles['nav-column']}>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  HOME
                </Link>
              </li>
              {navigation?.map((item) => (
                <li key={item.id}>
                  <Link className={styles.link} href={item.slug}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
