package com.nilushiya.weather.Services.Service;

import org.springframework.stereotype.Service;

import java.io.IOException;
@Service
public interface WeatherService {

    String getWeatherData() throws IOException;
}
