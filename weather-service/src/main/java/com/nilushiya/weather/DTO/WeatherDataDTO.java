package com.nilushiya.weather.DTO;

import lombok.Data;

@Data
public class WeatherDataDTO {
    String cityName;
    String weatherDescription;
    double temp;

    public WeatherDataDTO(String cityName, String weatherDescription, double temp) {
        this.cityName = cityName;
        this.weatherDescription = weatherDescription;
        this.temp = temp;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getWeatherDescription() {
        return weatherDescription;
    }

    public void setWeatherDescription(String weatherDescription) {
        this.weatherDescription = weatherDescription;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }
}
