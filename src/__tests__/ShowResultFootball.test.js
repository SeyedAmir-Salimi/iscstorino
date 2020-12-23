import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import ShowResultFootball from '../components/ShowResultFootball'

describe('<ShowResultFootball/>', () => {

    const data =[{
        team: "A",
        sottrare: 8
    }]
  it('should have been in document', () => {
    render(<ShowResultFootball chosenTeam={data} />)
    expect(screen.getByText('close')).toBeInTheDocument()
    expect(screen.getByText('Team: A')).toBeInTheDocument()
    expect(screen.getByText('Goals Subtract: 8')).toBeInTheDocument()
  })

})
