
import './App.css';
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function App() {
  const [city, setcity] = useState("")
  const [locations, setLocation] = useState({})
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36972fddc4b90a843600ed2b90203164 `

  const searchLoc = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        // setLocation(res.data)
        console.log(res.data)
      }).catch((error) => {
        // Handle the error and show an alert
        console.error('Error fetching data:', error);
        alert('Oops! Something went wrong. Check city name again!!!.');
      });

    }


  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=36972fddc4b90a843600ed2b90203164 `

  return (


    <div className="App">

      <div className='search'>
        <input className='Inp' placeholder="Enter City" value={city} onChange={(event) => { setcity(event.target.value) }} onKeyDown={searchLoc} type='text' />
      </div>

      <div className='container'>
        <div className='top'>

          <div className='location'><h3>{locations.name}</h3></div>
          <div className='temp'><h1>{locations.main ? locations.main.temp + "°C" : null}</h1></div>
          <div className='condtion'><h3>{locations.weather ? locations.weather[0].description : null}</h3></div>

        </div>

        <div className='bottom'>

          <div className='feels'>
            <p>Feels like</p>
            {locations.main ? locations.main.feels_like + "°C" : null}</div>
          <div className='humidity'>
            <p>humidity</p>
            {locations.main ? locations.main.humidity + "%" : null}</div>
          <div className='wind'>
            <p>wind</p>
            {locations.wind ? locations.wind.speed + "MPH" : null}</div>
        </div>

      </div>

    </div>
  );
}

export default App;
