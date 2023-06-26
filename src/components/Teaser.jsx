import { storyblokEditable } from '@storyblok/react/rsc';

const Teaser = ({ blok }) => <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;

export default Teaser
