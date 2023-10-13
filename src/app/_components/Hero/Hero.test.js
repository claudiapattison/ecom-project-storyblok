import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Hero } from './Hero'

import { HeroBuilder } from './HeroBuilder'
import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'

const image = new ImageBuilder()
  .withFilename('/placeholder/hero-desktop.jpg')
  .withAlt('headphones')
  .build()

const mock = new HeroBuilder()
  .withLabel('New products')
  .withTitle('XX99 MARK II HEADPHONES')
  .withText(
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
  )
  .withImage(image)
  .withImageMobile(image)
  .build()
  
jest.mock('@storyblok/react/rsc', () => ({
  getStoryblokApi: () => ({
      get: jest.fn(() => Promise.resolve({ data: { story: { blok: mock } } })),
  }),
}));


describe('Hero', () => {
  it('render label', async () => {
    render(<Hero blok={mock} />); 
    const label = screen.getByText(mock.label)
    expect(label).toBeInTheDocument(); 
    expect(label.textContent).toBe(mock.label); 
  });

  it('render heading', async () => {
    render(<Hero blok={mock} />); 
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument(); 
    expect(heading.textContent).toBe(mock.title); 
  });

  it('render text', async () => {
    render(<Hero blok={mock} />); 
    const text = screen.getByText(mock.text)
    expect(text).toBeInTheDocument(); 
    expect(text.textContent).toBe(mock.text); 
  });
  
  it('render button', async () => {
    render(<Hero blok={mock} />); 
    const link = screen.getByText('See product')
    expect(link).toBeInTheDocument(); 
    expect(link).toHaveAttribute('href', mock.link.cached_url);
  });
});

