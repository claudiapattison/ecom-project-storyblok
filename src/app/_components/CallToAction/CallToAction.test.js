import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CallToAction } from './CallToAction'

import { CallToActionBuilder } from './CallToActionBuilder'
import { ImageBuilder } from '../../../utils/Builders/ImageBuilder'

const image = new ImageBuilder()
  .withFilename('/placeholder/cta2.jpg')
  .withAlt('headphones')
  .build()

const imageFeature = new ImageBuilder()
  .withFilename('/placeholder/cta1.jpg')
  .withAlt('headphones')
  .build()

const mock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withImage(image)
  .build()

const featureMock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withFeature(true)
  .withImage(image)
  .build()

const spiltMock = new CallToActionBuilder()
  .withTitle('ZX9 SPEAKER')
  .withText(
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
  )
  .withSpilt(true)
  .withImage(imageFeature)
  .build()

jest.mock('@storyblok/react/rsc', () => ({
  getStoryblokApi: () => ({
      get: jest.fn(() => Promise.resolve({ data: { story: { blok: mock } } })),
  }),
}));

describe('Call To Action', () => {
  it('render title', async () => {
    render(<CallToAction blok={mock} />);   
    const title = screen.getByText(mock.title)
    expect(title).toBeInTheDocument(); 
    expect(title.textContent).toBe(mock.title); 
  })

  it('render text', async () => {
    render(<CallToAction blok={mock} />);   
    const text = screen.getByText(mock.text)
    expect(text).toBeInTheDocument(); 
    expect(text.textContent).toBe(mock.text); 
  })

  it('renders a link', () => {
    render(<CallToAction blok={mock} />);
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/');
  });

  it('renders the Image component with the correct props', () => {
    render(<CallToAction blok={mock} />); 

    const image = screen.getByAltText('headphones');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'headphones');
    expect(image).toHaveClass('image');
  });

  it('applies feature class when feature prop is true', () => {
    render(<CallToAction blok={featureMock} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('container--feature');
  });

  it('applies spilt class when spilt prop is true', () => {
    render(<CallToAction blok={spiltMock} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('container--spilt');
  });
  
});

