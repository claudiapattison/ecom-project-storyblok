import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Hero } from './components/Hero/Hero'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'
import '../../scss/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero label="NEW PRODUCT" title="XX99 Mark II Headphones" text="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast." />
      <CategoryMenu list={[{ id: 1, title: "Headphones", image: {src:"/placeholder/image-category-thumbnail-headphones.png"}, link: "/"  }, { id: 2, title: "Speakers", image: {src:"/placeholder/image-category-thumbnail-speakers.png"}, link: "/"  }, { id: 3, title: "Earphones", image: {src:"/placeholder/image-category-thumbnail-earphones.png"}, link: "/"  }]} />
    </main>
  )
}
