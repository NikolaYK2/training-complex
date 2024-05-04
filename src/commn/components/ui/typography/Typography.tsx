import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './Typography.module.scss'

type VariantType =
  | "h1"
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption1'
  | 'overline'
  | 'link1'
  | 'link2'

type Typography<T extends ElementType = 'p'> = {
  className?: string,
  colorText?: 'dark' | 'light'
  variant?: VariantType
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: Typography<T>) => {
  const {colorText = 'light', className, variant = 'p', ...rest} = props

  const Component: ElementType = variant && getComponent(variant as VariantType)

  return <Component className={`${s[variant]} ${className} ${s[colorText]}`} {...rest}/>
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



