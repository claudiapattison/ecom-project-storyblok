import { type FC } from 'react'
import {
  type SbBlokData,
  StoryblokComponent,
  storyblokEditable
} from '@storyblok/react/rsc'

interface IGridComponent extends SbBlokData {
  item: SbBlokData[]
}

export const CallToActionGrid: FC<{ blok: IGridComponent }> = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="container">
    {blok.item?.map((item) => (
      // eslint-disable-next-line no-underscore-dangle
      <StoryblokComponent blok={item} key={item._uid?.toString()} />
    ))}
  </div>
)
