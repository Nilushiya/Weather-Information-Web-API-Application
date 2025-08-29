import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/weatherDetail.css";
import weatherIcon from "../assets/cloud.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cloudBack from "../assets/clu2.png";

const WeatherDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const weather = state?.data;
  const color = state?.color;
  console.log("color:", color);
  const handleBack = () => {
    navigate("/weather");
  };
  return (
    <div className="weatherdetail">
      <header className="weatherdetail-header">
        <h5>
          <img
            src={weatherIcon}
            alt="Weather Icon"
            style={{ width: "50px", height: "35px" }}
          />
          Weather App
        </h5>
      </header>
      <div className="weatherdetail-card">
        <div
          className="row-card"
          style={{
            backgroundImage: `linear-gradient(${color}, ${color}), url(${cloudBack})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={handleBack}
            style={{ cursor: "pointer", color: "black" }}
            className="arrow"
          />
          <div className="row1">
            <h5>{weather.cityName}</h5>
            <h2>{weather.temp}°C</h2>
          </div>
        </div>
        <div className="row-two">
          <p>{weather.weatherDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
