import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { BiFootball } from "react-icons/bi";
import {useHistory} from 'react-router-dom'

const Home = () => {
  let history = useHistory()
  const changeLink = (LINK)=>{
    history.push(LINK)
  }
  return (
    <div className='homepage'>
      <div onClick={()=> changeLink("/weather")}>
        <TiWeatherCloudy style={{fontSize: "6rem"}}/>
        <h1>Weather</h1>
      </div>
      <div onClick={()=> changeLink("/football")}>
        <BiFootball style={{fontSize: "6rem"}} />
        <h1>Football</h1>
      </div>
    </div>
  )
}

export default Home
