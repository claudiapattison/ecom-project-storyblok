'use client'

import { type FC } from 'react'
import { renderRichText } from '@storyblok/react'
import { type SbBlokData } from '@storyblok/react/rsc'
import styles from './ProductFeatures.module.scss'
import { render } from 'storyblok-rich-text-react-renderer'

interface ProductFeaturesProps extends SbBlokData {
  features: string
  inthebox?: TableData
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

export const ProductFeatures: FC<ProductFeaturesProps> = ({
  features,
  inthebox
}) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>Features</h3>
            <div>{render(features)}</div>
          </div>
          {inthebox != null && (
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
                    {inthebox.tbody.map((tr) => (
                      <tr key={tr._uid}>
                        {tr.body.map((td) => (
                          <td key={td._uid}>{td.value}</td>
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
