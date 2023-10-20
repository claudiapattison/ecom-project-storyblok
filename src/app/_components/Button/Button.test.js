import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Button } from './Button'

import { ButtonBuilder, ButtonBuilderLink } from './ButtonBuilder'

const mock = new ButtonBuilder()
  .withChildren('View Product')
  .build()

const mockSecondary = new ButtonBuilder()
  .withChildren('View Product')
  .withVariant('secondary')
  .build()

const typeSubmit = new ButtonBuilder()
  .withChildren('Submit Button')
  .withType('submit')
  .build()

const mockLink = new ButtonBuilderLink()
  .withLink('/example')
  .withChildren('Link Button')
  .build()

describe('Button', () => {

  // Variant Tests
  it('render primary button', async () => {
    render(<Button variant={mock.variant}>Primary Button</Button>);
    const button = screen.getByRole('button', { name: /Primary Button/i });
    expect(button).toBeInTheDocument();
  });

  it('render secondary button', async () => {
    render(<Button variant={mockSecondary.variant}>Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /Secondary Button/i });
    expect(button).toBeInTheDocument();
  });

  // Type tests
  it('render submit button', async () => {
    render(<Button type="submit">Submit Button</Button>);
    const button = screen.getByRole('button', { name: /Submit Button/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('render button with type button', async () => {
    render(<Button type="button">Button</Button>);
    const button = screen.getByRole('button', { name: /Button/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('render reset button', async () => {
    render(<Button type="reset">Reset Button</Button>);
    const button = screen.getByRole('button', { name: /Reset Button/i });
    expect(button).toHaveAttribute('type', 'reset');
  });

  // Disabled

  it('disables the button when the disabled prop is true', () => {
    render(<Button variant={mock.variant} disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /Disabled Button/i });
    expect(button).toBeDisabled();
  });

  // Link
  it('renders a link when a link prop is provided', () => {
    render(<Button link={mockLink.link}>Link Button</Button>);
    const button = screen.getByRole('link', { name: /Link Button/i });
    expect(button).toBeInTheDocument();
  });

  // Aria Label
  it('renders an aria label', () => {
    render(<Button ariaLabel="Aria Label">Aria Label</Button>);
    const button = screen.getByRole('button', { name: /Aria Label/i });
    expect(button).toHaveAttribute('aria-label', 'Aria Label');
  });

  // Click
  it('handles a click event', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = screen.getByRole('button', { name: /Click Me/i });

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });


})