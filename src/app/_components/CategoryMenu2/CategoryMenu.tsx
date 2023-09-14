/* eslint-disable no-underscore-dangle */
import { type FC } from 'react'
import { type SbBlokData } from '@storyblok/react/rsc'
import styles from './CategoryMenu.module.scss'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { type ImageStoryBlokProps } from '../../../../interfaces/common'

interface CategoryMenuProps extends SbBlokData {
  category: CategoryMenuItemProps[]
}

interface CategoryMenuItemProps {
  id: string
  content: {
    title: string
    teaserImage: ImageStoryBlokProps
  }
  full_slug: string
}

export const CategoryMenu: FC<CategoryMenuProps> = ({ category }) => (
  <div className="container">
    <div className={styles.container}>
      <ul className={styles.list}>
        {category?.map((item) => {
          const image = item.content.teaserImage
          return (
            <li key={item.id} className={styles['list-item']}>
              <CategoryItem
                title={item.content.title}
                image={image}
                link={item.full_slug}
              />
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)
