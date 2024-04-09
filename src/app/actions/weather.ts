import { API_PATH } from "../lib/config"
import { API_KEY } from "../lib/config"


export async function fetchWeather({lon, lat}: {lon: number, lat: number}){
  const weatherDataUrl = `${API_PATH}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  const weatherDataResponse = await fetch(weatherDataUrl, {
      next: { revalidate: 60 },
  })
  const weatherData = await weatherDataResponse.json()
  return weatherData
}