import React from 'react'
import { render } from '@testing-library/react'
import { PersonalInfo } from './PersonalInfo'

describe('Personal/basic info screen', () => {
  it('Renders all fields', () => {
    const { getByLabelText } = render(<PersonalInfo onSubmit={() => {}} />)

    ;['First name', 'Middle', 'Last name', 'Email address'].forEach(
      fieldName => {
        expect(getByLabelText(fieldName)).toBeVisible()
      }
    )
  })

  it('Invalid without input', () => {
    const { getByTestId } = render(<PersonalInfo onSubmit={() => {}} />)

    const form = getByTestId('personal-info-form')
    expect(form).toBeInvalid()
  })

  it('Valid with input', () => {
    const { getByLabelText, getByTestId } = render(
      <PersonalInfo onSubmit={() => {}} />
    )
    const form = getByTestId('personal-info-form') as HTMLFormElement
    const first = getByLabelText('First name') as HTMLInputElement
    const last = getByLabelText('Last name') as HTMLInputElement
    const email = getByLabelText('Email address') as HTMLInputElement

    first.value = 'Henry'
    last.value = 'Donaldson'
    email.value = 'h@h.biz'

    expect(form).toBeValid()
  })
})
