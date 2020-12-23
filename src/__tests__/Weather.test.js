import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Weather from '../components/Weather'

describe('<Weather/>', () => {

  it('should not have text "Click to..."', () => {
    render(<Weather />)
    expect(screen.queryByText('Click to see the day...')).not.toBeInTheDocument()
  })
  it('should not have text ', () => {
    render(<Weather />)
    expect(screen.queryByText('Day')).not.toBeInTheDocument()
    expect(screen.queryByText('Max Temp')).not.toBeInTheDocument()
    expect(screen.queryByText('Min Temp')).not.toBeInTheDocument()
    expect(screen.queryByText('Average Temp')).not.toBeInTheDocument()
  })
})
