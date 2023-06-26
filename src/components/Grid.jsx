
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Grid;
