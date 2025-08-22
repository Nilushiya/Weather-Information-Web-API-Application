import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import weatherIcon from './assets/cloudy.png';
import './style/App.css';
import { Button, Spinner } from 'react-bootstrap';
function App() {
const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } = useAuth0();
const [weatherData, setWeatherData] = useState([]);
const [loading, setLoading] = useState(false);

// useEffect(() => {
//     if (isAuthenticated) {
//       fetchWeather();
//     }
//   }, [isAuthenticated]);
useEffect(() => {
    // if (isAuthenticated) {
      fetchWeather();
    // }
  }, []);
  const fetchWeather = async () => {
    setLoading(true);
    try {
      // const token = await getAccessTokenSilently();
      const response = await axios.get('http://localhost:8080/api/weather'
      //   , {
      //   headers: { Authorization: `Bearer ${token}` }
      // }
    );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
    setLoading(false);
  };

// if(!isAuthenticated){
//   return(
//     <div class="container">
//       <h1>Weather App</h1>
//       <Button onClick={() => loginWithRedirect()}>Log In</Button>
//     </div>
//   )
// }
  return (
    <div class=" app" >
      {/* <div className='shadow'></div> */}
      <h1 ><img src={weatherIcon} alt="Weather Icon" />Weather App</h1>
      {/* <div id='cloud'></div> */}
      {/* <Button variant="danger" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button> */}
    </div>
  );
}

export default App;
