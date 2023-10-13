import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { HeroPage } from './HeroPage'

import { HeroPageBuilder } from './HeroPageBuilder'

const mock = new HeroPageBuilder().withTitle('Headphones').build()
  

describe('Hero', () => {

  it('render heading', async () => {
    render(<HeroPage title={mock.title} />); 
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument(); 
    expect(heading.textContent).toBe(mock.title); 
  });
  
});

