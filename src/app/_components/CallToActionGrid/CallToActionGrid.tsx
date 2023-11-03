import { type FC } from 'react'
import {
  type SbBlokData,
  StoryblokComponent,
  storyblokEditable
} from '@storyblok/react'
import { CallToAction, CallToActionProps } from '../CallToAction/CallToAction'
interface IGridComponent extends SbBlokData {
  item: CallToActionProps[]
}

export const CallToActionGrid: FC<{ blok: IGridComponent }> = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="container">
    {blok.item?.map((item) => (
      // eslint-disable-next-line no-underscore-dangle
      <CallToAction blok={item} key={item._uid?.toString()} />
    ))}
  </div>
)
