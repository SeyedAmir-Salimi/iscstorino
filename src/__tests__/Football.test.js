import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Football from '../components/Football'

describe('<Football/>', () => {

  it('should not have text "Click to..."', () => {
    render(<Football />)
    expect(screen.queryByText('Click to see the team with the least difference between goals scored and conceded')).not.toBeInTheDocument()
  })
  it('should not have text', () => {
    render(<Football />)
    expect(screen.queryByText('Team')).not.toBeInTheDocument()
    expect(screen.queryByText('Win')).not.toBeInTheDocument()
    expect(screen.queryByText('Lose')).not.toBeInTheDocument()
    expect(screen.queryByText('Goals F')).not.toBeInTheDocument()
    expect(screen.queryByText('Goals A')).not.toBeInTheDocument()
    expect(screen.queryByText('Points')).not.toBeInTheDocument()
  })
})
