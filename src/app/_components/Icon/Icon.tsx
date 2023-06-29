/* eslint-disable import/no-absolute-path */
import { type FC } from 'react'
import '/public/icons/arrow-right.svg'
import '/public/icons/cart.svg'
import '/public/icons/facebook.svg'
import '/public/icons/twitter.svg'
import '/public/icons/instagram.svg'

interface IconProps {
  name: string
  className?: string
}

export const Icon: FC<IconProps> = ({ name, className }) => (
  <svg aria-hidden="true" className={className}>
    <use xlinkHref={name} />
  </svg>
)
