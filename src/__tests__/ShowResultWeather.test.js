import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import ShowResultWeather from '../components/ShowResultWeather'

describe('<ShowResultWeather/>', () => {

    const data =[{
        day: 1,
        sottrare: 5
    }]
  it('should have been in document', () => {
    render(<ShowResultWeather chosenDay={data} />)
    expect(screen.getByText('close')).toBeInTheDocument()
    expect(screen.getByText('Day: 1')).toBeInTheDocument()
    expect(screen.getByText('Smalest Temp Range: 5')).toBeInTheDocument()
  })

})
