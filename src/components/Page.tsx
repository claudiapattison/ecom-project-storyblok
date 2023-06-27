import { type SbBlokData, StoryblokComponent } from '@storyblok/react'
import { type FunctionComponent } from 'react'

export interface IPageComponent extends SbBlokData {
  body: SbBlokData[]
}

const Page: FunctionComponent<{ blok: IPageComponent }> = ({ blok }) => (
  <div>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent
        blok={nestedBlok}
        // eslint-disable-next-line no-underscore-dangle
        key={nestedBlok._uid?.toString()}
      />
    ))}
  </div>
)

export default Page
