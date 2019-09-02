import React from 'react'
import { render } from '@testing-library/react'
import HeaderLegacy from './HeaderLegacy'

test('Shows Link', async () => {
  const { getByText } = render(<HeaderLegacy />)
  expect(getByText('Instant Funding')).toBeInTheDocument()
})
