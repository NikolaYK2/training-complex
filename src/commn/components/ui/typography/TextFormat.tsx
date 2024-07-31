import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './TextFormat.module.scss'

type VariantType =
  | 'body1'
  | 'body2'
  | 'caption'
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
  variant?: VariantType
} & ComponentPropsWithoutRef<T>

export const TextFormat = <T extends ElementType = 'span'>(props: Typography<T>) => {
  const { className, colorText = 'light', variant = 'p', ...rest } = props

  const Component: ElementType = variant && getComponent(variant as VariantType)

  return <Component className={`${s[variant]} ${className} ${s[colorText]}`} {...rest} />
}

function getComponent(variant: VariantType) {
  switch (variant) {
    case 'h1': {
      return 'h2'
    }
    case 'h2': {
      return 'h3'
    }
    case 'h3': {
      return 'h4'
    }
    case 'h4': {
      return 'h5'
    }
    case 'caption':
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
