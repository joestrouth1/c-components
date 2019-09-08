/** @jsx jsx */
import { jsx } from 'theme-ui'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import { defaultTheme } from '../theme'

type ButtonVariant = keyof typeof defaultTheme.buttons

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** Preset variant to use, defined in theme.buttons */
  variant?: ButtonVariant
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => (
  <button
    {...props}
    sx={{
      appearance: 'none',
      outline: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      fontWeight: 'bold',
      fontFamily: 'body',
      letterSpacing: 'button',
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      transitionProperty: 'opacity, box-shadow, transform',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      '&[disabled]': {
        opacity: 0.5,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          transform: 'none',
        },
      },
      '&:focus': {
        boxShadow: 'outline',
      },
      // pass variant prop to sx
      variant: `buttons.${variant}`,
    }}
  />
)
