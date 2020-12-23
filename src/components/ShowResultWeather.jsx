import React from 'react'

function ShowResultWeather ({ chosenDay, close}) {
  const mapTabel2 = chosenDay.map(x => {
    return (
      <div key={x.day}>
        <h1>Day: {x.day}</h1>
        <h1>Smalest Temp Range: {x.sottrare}</h1>
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

export default ShowResultWeather
