import './style.css'
import { Weather } from './script'

document.getElementById('getWeather').addEventListener('click',function(){
  Weather.getWeather()
})

