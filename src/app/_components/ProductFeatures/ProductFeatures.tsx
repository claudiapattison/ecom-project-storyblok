/* eslint-disable react/no-danger */

'use client'

import { type FC } from 'react'
import { renderRichText } from '@storyblok/react'

interface ProductFeaturesProps {
  features: string
}

export const ProductFeatures: FC<ProductFeaturesProps> = ({ features }) => {
  const renderedRichText = renderRichText(features)
  return (
    <section>
      <div className="container">
        <h3>Features</h3>
        <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
        <table />
      </div>
    </section>
  )
}
