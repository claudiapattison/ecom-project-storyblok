export interface ButtonProps {
  variant?: ButtonVariant;
  link?: string;
  linkTarget?: string | null;
  children: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonType = 'button' | 'submit' | 'reset' | undefined

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonSize = 'large' | 'small' | undefined
