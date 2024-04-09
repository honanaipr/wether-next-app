'use client'
import styles from './weatherCard.module.css'
import React, { Suspense, useEffect, useState } from 'react'
import { fetchGeo } from "./actions/geo"
import { fetchWeather } from './actions/weather'


export default function WeatherCard(){
  const [localCity, setLocalCity] = useState("Moskow") 
  const [city, setCity] = useState("Moskow")
  const [geoData, setGeoData] = useState<any>(null)
  const [weatherData, setWeatherData] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      const geoData = await fetchGeo({location: city})
      setGeoData(geoData)
      const weatherData = await fetchWeather({lon: geoData.lon, lat: geoData.lat})
      setWeatherData(weatherData)
    }
    fetchData()
  }, [city])

  const cardData = geoData && weatherData
  ?<>
    <span>Город: {geoData.local_names?.ru}</span>
    <span>Температура: {weatherData.main?.temp}</span>
    <span>Ощющяется как: {weatherData.main?.feels_like}</span>
    <span>Минимальная температура: {weatherData.main?.temp_min}</span>
    <span>Максимальная температура: {weatherData.main?.temp_max}</span>
    <span>Видимость: {weatherData.visibility}</span>
    <span>Скорость ветра: {weatherData.wind?.speed}</span>
    <span>Рассвет: {weatherData.sys?.sunrise}</span>
    <span>Закат: {weatherData.sys?.sunset}</span>
  </>
  :<>
    <span> Loading ...</span>
  </>
  return (
    <div className={styles.card}>
      <form action={(e)=>{setCity(localCity)}}>
        <input id="input" type="text" value={localCity} onChange={(e)=>setLocalCity(e.target.value)}></input>
      </form>
      <Suspense fallback={<span>Loading...</span>}>
        {cardData}
      </Suspense>
    </div>
  )
}