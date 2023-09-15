/* eslint-disable react/no-danger */

'use client'

import { type FC } from 'react'
import { renderRichText } from '@storyblok/react'
import { type SbBlokData } from '@storyblok/react/rsc'
import styles from './ProductFeatures.module.scss'

interface ProductFeaturesProps extends SbBlokData {
  features: string
  inthebox?: TableData
}

interface TableCell {
  value: string
  id: number
}

interface TableRow {
  body: TableCell[]
  id: number
}

interface TableData {
  tbody: TableRow[]
  id: number
}

export const ProductFeatures: FC<ProductFeaturesProps> = ({
  features,
  inthebox
}) => {
  const renderedRichText = renderRichText(features)
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>Features</h3>
            <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
          </div>
          {inthebox != null && (
            <div>
              <div className={styles.box}>
                <h3 className={styles.title}>IN THE BOX</h3>
                <table className={styles.table}>
                  <tbody>
                    {inthebox.tbody.map((tr) => (
                      <tr key={tr.id}>
                        {tr.body.map((td) => (
                          <td key={td.id}>{td.value}</td>
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
