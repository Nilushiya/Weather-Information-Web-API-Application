package com.nilushiya.weather.Services.Service;

import com.nilushiya.weather.DTO.WeatherDataDTO;
import com.nilushiya.weather.DTO.WeatherResponse;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface WeatherService {

    WeatherResponse<List<WeatherDataDTO>> getWeatherData() throws IOException;
}
