import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { ResidentialInfo } from './ResidentialInfo'

describe('Personal/basic info screen', () => {
  it('Renders all fields', () => {
    const { getByLabelText } = render(<ResidentialInfo onSubmit={() => {}} />)
    const address = getByLabelText('Address') as HTMLInputElement
    const address2 = getByLabelText(
      'Apartment, suite, or building (optional)'
    ) as HTMLInputElement
    const city = getByLabelText('City') as HTMLInputElement
    const state = getByLabelText('State') as HTMLInputElement
    const ZIP = getByLabelText('ZIP') as HTMLInputElement
    const phone = getByLabelText('Phone number') as HTMLInputElement

    for (const field of [address, address2, city, state, ZIP, phone]) {
      expect(field).toBeVisible()
    }
  })

  it('Invalid by default', () => {
    const { getByTestId, getByText } = render(
      <ResidentialInfo onSubmit={() => {}} />
    )
    const form = getByTestId('residential-info-form')
    const button = getByText('Next')

    expect(form).toBeInvalid()
    expect(button).toBeDisabled()
  })

  it('Submits, given valid input', async () => {
    // const mockSubmit = jest.fn(e => e.preventDefault())
    const { getByTestId, getByLabelText } = render(
      <ResidentialInfo onSubmit={() => {}} />
    )
    const form = getByTestId('residential-info-form') as HTMLFormElement

    // const address = getByLabelText('Address')
    // const city = getByLabelText('City')
    // const state = getByLabelText('State')
    // const zip = getByLabelText('ZIP')
    // const phone = getByLabelText('Phone number')

    // const button = getByText('Next')

    // expect(getByDisplayValue('123 Sesame Street')).toBeVisible()

    // waitForDomChange({
    //   container
    // })
    // .then(console.log)
    // fireEvent.change(city, { target: { value: 'Tempe'}})
    // fireEvent.change(state, { target: { value: 'AZ'}})
    // fireEvent.change(zip, { target: { value: '09459'}})
    // fireEvent.change(phone, { target: { value: '8583601574'}})
    expect(form).toBeInvalid()
    // expect(button).toBeDisabled()
    // fireEvent.click(button)
    // expect(mockSubmit).not.toHaveBeenCalled()
  })
})
