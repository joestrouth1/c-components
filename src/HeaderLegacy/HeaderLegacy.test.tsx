import React from 'react'
import { render } from '@testing-library/react'
import HeaderLegacy from './HeaderLegacy'

test('Shows Link', async () => {
  const { getAllByText } = render(<HeaderLegacy linkText="Link" />)
  expect(getAllByText('Link')).toHaveLength(4)
})
