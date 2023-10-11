import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Hero from './Hero'

export const heroMockData = {
    label: 'Mock Label',
    title: 'Mock Title',
    text: 'Mock Text',
    link: '/mock-link',
    image: {
      filename: '/mock-image.jpg',
      alt: 'Mock Image Alt Text',
    },
    imageMobile: {
      filename: '/mock-image-mobile.jpg',
      alt: 'Mock Mobile Image Alt Text',
    },
  };

  
jest.mock('@storyblok/react/rsc', () => ({
    getStoryblokApi: () => ({
        get: jest.fn(() => Promise.resolve({ data: { story: { blok: heroMockData } } })),
    }),
}));


describe('Hero', () => {
  it('render heading', async () => {
    render(<Hero blok={heroMockData} />); 
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument(); 
    expect(heading.textContent).toBe(heroMockData.title); 
  });
});

