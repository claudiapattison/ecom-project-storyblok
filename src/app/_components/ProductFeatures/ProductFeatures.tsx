'use client'

import { type FC } from 'react'
import styles from './ProductFeatures.module.scss'
import { render } from 'storyblok-rich-text-react-renderer'
import { type SbBlokData, storyblokEditable } from '@storyblok/react'

interface ProductFeaturesProps extends SbBlokData {
  content: string
  table?: TableData
}

interface TableCell {
  value: string
  _uid: number
}

interface TableRow {
  body: TableCell[]
  _uid: number
}

interface TableData {
  tbody: TableRow[]
  id: number
}

export const ProductFeatures: FC<{ blok: ProductFeaturesProps }> = ({
  blok
}) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>Features</h3>
            <div {...storyblokEditable(blok)}>{render(blok.content)}</div>
          </div>
          {blok.table != null && (
            <div>
              <div className={styles.box}>
                <h3 className={styles.title}>IN THE BOX</h3>
                <table className={styles.table}>
                  <thead className="sr-hidden">
                    <tr>
                      <th>Acount</th>
                      <th>Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blok.table.tbody.map((tr) => (
                      <tr key={tr._uid}>
                        {tr.body.map((td) => (
                          <td key={td._uid} {...storyblokEditable(blok)}>
                            {td.value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
