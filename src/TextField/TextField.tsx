/**@jsx jsx */
import { jsx, Box } from 'theme-ui'
import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { uuid } from '../utils/uuid'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Informative label to display above the input
   */
  label: string
  /**
   * Name of the input, used for input's name, id, and label[htmlFor]
   * @default uuid()
   */
  name?: string
  /**
   * Additional info to help the user; displayed below the input.
   */
  hint?: ReactNode
}

export type TextFieldRef = HTMLInputElement

/**
 * Wrapper for HTML's `input` element.
 */
export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  ({ name = uuid(), label, hint, sx, ...props }, ref) => {
    return (
      <Box sx={sx}>
        <label
          htmlFor={name}
          sx={{
            variant: 'type.label',
          }}
        >
          {label}
        </label>
        <input
          {...props}
          name={name}
          id={name}
          ref={ref}
          aria-describedby={hint ? `input-${name}__hint` : undefined}
          sx={{
            appearance: 'none',
            p: 3,
            borderTop: 0,
            borderRight: 0,
            borderBottom: 2,
            borderLeft: 0,
            borderBottomColor: 'grays.7',
            borderBottomStyle: 'solid',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            backgroundColor: 'white',
            boxShadow: 'medium',
            variant: 'type.body',
            mb: typeof hint === 'string' ? 1 : 2,
          }}
        />
        {hint ? (
          <div
            sx={{
              variant: 'type.hint',
            }}
            id={`input-${name}__hint`}
          >
            {hint}
          </div>
        ) : null}
      </Box>
    )
  }
)
