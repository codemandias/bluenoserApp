// This page was based upon the MUI template: https://github.com/mui/material-ui/tree/v5.8.2/docs/data/material/getting-started/templates/sign-in-side
// It was then reworked and customized by Alex Furlotte: June 2022
import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
function formatTime(timestamp) {
  
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  var time = " am"
  if(hours>12){
    hours = hours- 12 ;
    time = " pm"
  }
  // Minutes part from the timestamp
  if (date.getMinutes() < 10) {
  var minutes = "0" + date.getMinutes();
  }
  else {
    var minutes = date.getMinutes();
  }
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  
  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes + time;
  return formattedTime;
    
  };

  return (
    <Box id="pagebox" sx={{ display: 'flex', height: '100vh' }} marginTop={7} marginLeft={7.8} >
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
            <p>Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              
            </div>
            <div className="humidity">
            <p>Humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              
            </div>
            <div className="wind">
            <p>Wind Speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              
            
            </div>
            <div className="sunrise">
            <p>Sunrise</p>
              {data.sys ? <p className='bold'>{formatTime(data.sys.sunrise)} </p> : null}
              
            
            </div>
            <div className="sunset">
            <p>Sunset</p>
              {data.sys ? <p className='bold'>{formatTime(data.sys.sunset)} </p> : null}
              
            
            </div>
          </div>
        }



      </div>
    </div>
    </Box>
  );
}

export default App;






