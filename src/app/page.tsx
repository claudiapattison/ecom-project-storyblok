import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Footer } from './components/Footer/Footer'
import '../../scss/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Content</h1>  
    </main>
  )
}
