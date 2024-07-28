import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import s from './Button.module.scss'

export type ButtonVariantType = 'link' | 'primary' | 'secondary' | 'tertiary'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariantType
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<any, ButtonProps<ElementType>>(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: any
  ) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        {...rest}
        ref={ref}
      />
    )
  }
)
