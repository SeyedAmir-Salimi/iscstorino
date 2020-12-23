import React, { useState, useEffect, useCallback } from 'react'
import { fetchFootball, setFootball } from '../API/index'
import ShowResultFootball from './ShowResultFootball'
import Spinner from './Spinner'
function Football () {
  const [tabel, setTabel] = useState([])
  const [chosenTeam, setchosenTeam] = useState([])
  const [showResult, setshowResult] = useState(false)

  const getTabel = useCallback(async () => {
    const result = await fetchFootball()
    setTabel(result)
  }, [])
  
  const mapTabel = tabel.map(x => {
    return (
      <tr key={x.Team}>
        <td>{x.Team}</td>
        <td>{x.W}</td>
        <td>{x.L}</td>
        <td>{x.F}</td>
        <td>{x.A}</td>
        <td>{x.Pts}</td>
      </tr>
    )
  })

  useEffect(() => {
    getTabel()
  }, [getTabel])

  const setTheTeam = () => {
    const result = setFootball(tabel)
    setchosenTeam(result)
    setshowResult(true)
  }
  const closeShowWindow = () => {
    setshowResult(false)
  }
  return (
    <>
      {tabel.length === 0 && <Spinner />}
      {tabel.length > 0 && (
        <div>
          <div className='clicktoSee' onClick={() => setTheTeam()}>
            <h1>
              Click to see the team with the least difference between goals
              scored and conceded
            </h1>
          </div>
          <table className='tabel'>
            <thead>
              <tr>
                <th>Team</th>
                <th>Win</th>
                <th>Lose</th>
                <th>Goals F</th>
                <th>Goals A</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>{mapTabel}</tbody>
          </table>
        </div>
      )}
      {chosenTeam.length > 0 && showResult && (
        <ShowResultFootball chosenTeam={chosenTeam} close={closeShowWindow}/>
      )}
    </>
  )
}

export default Football
