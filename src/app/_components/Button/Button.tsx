import { type FC } from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'

export interface ButtonProps {
  variant?: ButtonVariant
  link?: string
  linkTarget?: string | null
  children: string
  type?: ButtonType
  disabled?: boolean
  ariaLabel?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
type ButtonType = 'button' | 'submit' | 'reset' | undefined

type ButtonVariant = 'primary' | 'secondary'

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  link,
  linkTarget,
  children,
  type = 'button',
  disabled,
  ariaLabel,
  onClick
}) => {
  const theme = `
  ${styles.button}
  ${variant !== undefined ? styles[variant] : ''}`

  return link !== undefined ? (
    <Link href={link} target={linkTarget ?? ''} className={theme}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={theme}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
