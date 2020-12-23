import React, { useState, useEffect, useCallback } from 'react'
import { fetchWeather, setWeather } from '../API/index'
import ShowResultWeather from './ShowResultWeather'
import Spinner from './Spinner'
function Weather () {
  const [tabel, setTabel] = useState([])
  const [chosenDay, setchosenDay] = useState([])
  const [showResult, setshowResult] = useState(false)
  const getTabel = useCallback(async () => {
    const result = await fetchWeather()
    setTabel(result)
  }, [])
  const mapTabel = tabel.map(x => {
    return (
      <tr key={x.Dy}>
        <td>{x.Dy}</td>
        <td>{x.MxT}</td>
        <td>{x.MnT}</td>
        <td>{x.AvT}</td>
      </tr>
    )
  })
  useEffect(() => {
    getTabel()
  }, [getTabel])

  const setTheTeam = () => {
    const result = setWeather(tabel)
    setchosenDay(result)
    setshowResult(true)
  }
  const closeShowWindow = () => {
    setshowResult(false)
  }
  return (
    <>
    {tabel.length ===  0 && <Spinner/>}
      {tabel.length > 0 && (
        <div>
          <div className='clicktoSee' onClick={()=> setTheTeam()}>
            <h1>
              Click to see the day with the smallest temperature range
            </h1>
          </div>
          <table className='tabe3'>
            <thead>
              <tr>
                <th>Day</th>
                <th>Max Temp</th>
                <th>Min Temp</th>
                <th>Average Temp</th>
              </tr>
            </thead>
            <tbody>{mapTabel}</tbody>
          </table>
        </div>
      )}
      {chosenDay.length > 0 && showResult && (
        <ShowResultWeather chosenDay={chosenDay} close={closeShowWindow}/>
      )}
    </>
  )
}

export default Weather
