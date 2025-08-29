import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/App.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import weatherIcon from '../assets/cloud.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import cloudBack from "../assets/clu2.png";
import { getCachedData, setCachedData } from "../utils/cache";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState();
  const cacheKey = "weatherData";
  const {getAccessTokenSilently, loginWithRedirect, logout, isAuthenticated, isLoading} = useAuth0();
  const cardColors = [
    "#6f42c1",
    "#03859cff",
    "#ca9905ff",
    "#c04854d8",
    "#0bac18e1",
    "#d12e2eff",
    "#2c29ceff",
    "#696b04ff",
  ];
  const navigate = useNavigate();

  useEffect(() =>{
    if (isLoading) return;
    if (isAuthenticated) {
      fetchWeather();
    } else {
      loginWithRedirect({
        authorizationParams: {
          audience: "https://myapi.example.com",
          redirect_uri: window.location.origin + "/weather",
        },
      });
    }
  }, [isAuthenticated, isLoading]);

  const fetchWeather = async () => {
    setLoading(true);

    const cached = getCachedData(cacheKey);
    if (cached) {
      setWeatherData(cached);
      setLoading(false);
      return;
    }  

    try {
      const token = await getAccessTokenSilently({
        audience: "https://myapi.example.com",
      });
      console.log("token: ",token);
      const response = await axios.get("http://localhost:8080/api/weather", {
        headers: { Authorization: `Bearer ${token}` }
    }
    );
      setCachedData(cacheKey, response.data.data);
      setWeatherData(response.data.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
    setLoading(false);
  };

  const addCity = () =>{
    setCity('');
  }
  return (
    <>
      <div className="app">
        <Button
          className="logout"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </Button>
        <header className="app-header">
          <h5>
            <img
              src={weatherIcon}
              alt="Weather Icon"
              style={{ width: "50px", height: "35px" }}
            />
            Weather App
          </h5>
          <div className="search-bar">
            <Form.Control
              type="text"
              placeholder="Enter a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ width: '150px', height: '35px',backgroundColor:"#1f2128", border:"none" }}
              className="custom-input"
            />
            <Button onClick={addCity} style={{backgroundColor:"#6f42c1", border:"none",fontSize: ".9rem"}}>Add City</Button>
          </div>
        </header>

        <Row className="cards-grid m-0 p-0">
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
          ) : (
            weatherData &&
            weatherData.map((c, index) => (
              <Col key={c.cityName} xs={12} md={6} lg={6}>
                <div
                  className="weather-card"
                  onClick={() =>
                    navigate(`/weather/${c.cityName}`, { state: { data: c, color:cardColors[index % cardColors.length]} })
                  }
                  style={{
                    cursor: "pointer",}}
                >
                  <div
                    className="row-one"
                    style={{
                      background: `${
                        cardColors[index % cardColors.length]
                      } url(${cloudBack}) bottom center / cover no-repeat `,
                      backgroundBlendMode: "overlay"
                    }}
                  >
                    <h5>{c.cityName}</h5>
                    <h2>{c.temp}°C</h2>
                  </div>
                  <div className="row-two">
                    <p>{c.weatherDescription}</p>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </div>

      <footer className="app-footer">
        <p>2025 Fidenz Technologies</p>
      </footer>
    </>
  );
};

export default Weather;
