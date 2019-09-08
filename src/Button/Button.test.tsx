import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('Shows child text', async () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })
})
