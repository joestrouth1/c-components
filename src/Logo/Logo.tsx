import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** URL of logo image */
  src?: string
  /** Alternative text for image, e.g. 'Company Name' */
  alt: string
}

/**
 * The company logo.
 */
export const Logo = ({
  src = 'https://placebear.com/217/40',
  alt,
  ...props
}: LogoProps) => <img {...props} alt={alt} src={src} />
