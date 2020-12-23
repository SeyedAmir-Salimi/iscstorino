import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Home from '../components/Home'

describe('<Home/>', () => {

  it('should have weather', () => {
    render(<Home />)
    expect(screen.getByText('Weather')).toBeInTheDocument()
  })
  it('should have Football', () => {
    render(<Home />)
    expect(screen.getByText('Football')).toBeInTheDocument()
  })
})
