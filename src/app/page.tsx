import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Hero } from './components/Hero/Hero'
import '../../scss/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero label="NEW PRODUCT" title="XX99 Mark II Headphones" text="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast." />
      <h1>page content</h1>
    </main>
  )
}
