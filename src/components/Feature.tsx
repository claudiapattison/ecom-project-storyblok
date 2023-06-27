import { type SbBlokData, storyblokEditable } from '@storyblok/react'
import { type FunctionComponent } from 'react'

export interface IFeatureComponent extends SbBlokData {
  name: string
}

const Feature: FunctionComponent<{ blok: IFeatureComponent }> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
)

export default Feature
