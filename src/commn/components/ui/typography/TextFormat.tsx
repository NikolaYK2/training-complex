import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './TextFormat.module.scss'

type VariantType =
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

type Typography<T extends ElementType = 'p'> = {
  className?: string
  colorText?: 'dark' | 'light'
  position?: 'left' | 'right'
  variant?: VariantType
} & ComponentPropsWithoutRef<T>

export const TextFormat = <T extends ElementType = 'p'>(props: Typography<T>) => {
  const { className, colorText = 'light', position = '', variant = 'p', ...rest } = props

  const Component: ElementType = variant && getComponent(variant as VariantType)

  return (
    <Component className={`${s[variant]} ${className} ${s[position]} ${s[colorText]}`} {...rest} />
  )
}

function getComponent(variant: VariantType) {
  switch (variant) {
    case 'h1': {
      return 'h1'
    }
    case 'h2': {
      return 'h2'
    }
    case 'h3': {
      return 'h3'
    }
    case 'h4': {
      return 'h4'
    }
    case 'caption1':
    case 'overline': {
      return 'small'
    }
    case 'link1':
    case 'link2': {
      return 'a'
    }
    case 'body1':
    case 'subtitle1':
    case 'body2':
    case 'subtitle2': {
      return 'p'
    }
    default: {
      return 'span'
    }
  }
}
