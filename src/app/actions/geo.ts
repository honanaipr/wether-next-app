import { API_PATH } from "../lib/config"
import { API_KEY } from "../lib/config"


export async function fetchGeo({location}: {location: string}){
  const geoDataUrl = `${API_PATH}/geo/1.0/direct?q=${location}&appid=${API_KEY}`
  const geoDataResponse = await fetch(geoDataUrl, { cache: 'force-cache'})
  const geoDatas = await geoDataResponse.json()
  return geoDatas[0]
}