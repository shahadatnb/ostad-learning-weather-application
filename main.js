import './style.css'
import { Weather } from './weather'

document.getElementById('getWeather').addEventListener('click',function(){
  Weather.getWeather()
})

