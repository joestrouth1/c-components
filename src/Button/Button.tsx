/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HTMLAttributes } from 'react'
import { defaultTheme } from '../theme'

type ButtonVariant = keyof typeof defaultTheme.buttons

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Preset variant to use, defined in theme.buttons */
  variant?: ButtonVariant
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => (
  <button
    {...props}
    sx={{
      appearance: 'none',
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
      // pass variant prop to sx
      variant: `buttons.${variant}`,
    }}
  />
)
