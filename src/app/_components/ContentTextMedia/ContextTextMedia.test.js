import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ContentTextMedia } from './ContentTextMedia'

import { ContentTextMediaBuilder } from './ContentTextMediaBuilder'
import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'

const image = new ImageBuilder()
  .withFilename('/placeholder/hero-desktop.jpg')
  .withAlt('headphones')
  .build()

const mock = new ContentTextMediaBuilder()
  .withTitle('Bringing you the best audio gear')
  .withText(
    'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
  )
  .withImage(image)
  .build()

jest.mock('@storyblok/react/rsc', () => ({
  getStoryblokApi: () => ({
      get: jest.fn(() => Promise.resolve({ data: { story: { blok: mock } } })),
  }),
}));


describe('ContextTextMedia', () => {

  it('render title', async () => {
    render(<ContentTextMedia blok={mock} />); 
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toBeInTheDocument(); 
    expect(heading.textContent).toBe(mock.title); 
  });

  it('render text', async () => {
    render(<ContentTextMedia blok={mock} />); 
    const text = screen.getByText(mock.text)
    expect(text).toBeInTheDocument(); 
    expect(text.textContent).toBe(mock.text); 
  });

  it('renders the Image component with the correct props', () => {
    render(<ContentTextMedia blok={mock} />); 
    const image = screen.getByAltText('headphones');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'headphones');
    expect(image).toHaveClass('image');
  });
});

