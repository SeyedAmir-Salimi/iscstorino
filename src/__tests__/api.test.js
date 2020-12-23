import { setWeather, setFootball } from '../API/index'

describe('setFootball', () => {
  it('should return an empy array without params', () => {
    const result = setFootball()
    expect(result).toStrictEqual([])
  })
  it('should return an empy array', () => {
    const result = setFootball([])
    expect(result).toStrictEqual([])
  })
  it('should return team with least difference between goals', () => {
    const data = [
      {
        Team: 'A',
        F: '52',
        A: '23'
      },
      {
        Team: 'B',
        F: '42',
        A: '31'
      },
      {
        Team: 'C',
        F: '12',
        A: '18'
      },
    ]
    const result = setFootball(data)
    expect(result[0].team).toStrictEqual("B")
    expect(result[0].sottrare).toStrictEqual(11)
  })
  it('should not calculate element with undefined property', () => {
    const data = [
      {
        Team: 'A',
        F: '52',
        A: '23'
      },
      {
        Team: 'B',
        F: '42',
        A: '31'
      },
      {
        Team: 'C',
        F: '12',
        A: '18'
      },
      {
        Team: undefined,
        F: '10',
        A: '9'
      },
    ]
    const result = setFootball(data)
    expect(result).toStrictEqual([{"sottrare": 11, "team": "B"}] )
  })
})

describe('setWeather', () => {
  it('should return an empy array without params', () => {
    const result = setWeather()
    expect(result).toStrictEqual([])
  })
  it('should return an empy array', () => {
    const result = setWeather([])
    expect(result).toStrictEqual([])
  })
  it('should return team with least difference between goals', () => {
    const data = [
      {
        Dy: 1,
        MxT: 88,
        MnT: 59
      },
      {
        Dy: 2,
        MxT: 73,
        MnT: 42
      },
      {
        Dy: 3,
        MxT: 66,
        MnT: 23
      },
    ]
    const result = setWeather(data)
    expect(result[0].day).toStrictEqual(1)
    expect(result[0].sottrare).toStrictEqual(29)
  })
  it('should not calculate element with undefined property', () => {
    const data = [
      {
        Dy: 1,
        MxT: 88,
        MnT: 59
      },
      {
        Dy: 2,
        MxT: 73,
        MnT: 42
      },
      {
        Dy: 3,
        MxT: 66,
        MnT: 23
      },
      {
        Dy: undefined,
        MxT: 66,
        MnT: 61
      },
    ]
    const result = setWeather(data)
    expect(result).toStrictEqual([{"day": 1, "sottrare": 29}])
  })

})
