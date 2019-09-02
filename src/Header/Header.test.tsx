import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('Shows Link', async () => {
  const { getAllByText } = render(<Header linkText="Link" />)
  expect(getAllByText('Link')).toHaveLength(4)
})
