import Axios from 'axios'

export const fetchFootball = async () => {
  try {
    const result = await Axios.get('http://localhost:3000/football')
    return result.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

export const fetchWeather = async () => {
  try {
    const result = await Axios.get('http://localhost:3000/weather')
    return result.data
  } catch (error) {
    throw new Error(error.response.data)
  }
}

export const setWeather =  (table) => {
  if(!table) return []
  if (table.length === 0) return []

  let calculate = []
  for (let index = 0; index < table.length; index++) {
    const element = table[index]
    const sottrare = element.MxT - element.MnT

    calculate.push({ sottrare: sottrare, day: element.Dy })
  }
  calculate = calculate.filter(x => x.day !== undefined)
  calculate.sort((a, b) => {
    return a.sottrare - b.sottrare
  })
  const ambiguous = calculate.filter(x => x.sottrare === calculate[0].sottrare)

  return ambiguous
}

export const setFootball = (table) => {
  if(!table) return []
  if (table.length === 0) return []

  let calculate = []
  for (let index = 0; index < table.length; index++) {
    const element = table[index]
    const sottrare = element.F - element.A
    calculate.push({ team: element.Team, sottrare: sottrare })
  }
  calculate = calculate.filter(x => x.team !== undefined)
  calculate.sort(x => x.sottrare).reverse()
  const ambiguous = calculate.filter(x => x.sottrare === calculate[0].sottrare)

  return ambiguous
}
