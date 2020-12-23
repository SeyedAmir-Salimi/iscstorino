import React from 'react'

function ShowResult ({chosenTeam, close}) {
    const mapTabel2 = chosenTeam.map(x => {
        return (
          <div key={x.team}>
            <h1>Team: {x.team}</h1>
            <h1>Goals Subtract: {x.sottrare}</h1>
          </div>
        )
      })
  return (
    <>
      <div className="showResult">
        <div className='tabelFShow'>
        <h3 onClick={()=> close()}>close</h3>
          {mapTabel2}
        </div>
      </div>
    </>
  )
}

export default ShowResult
