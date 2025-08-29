package com.nilushiya.weather.Controller;

import com.nilushiya.weather.DTO.WeatherDataDTO;
import com.nilushiya.weather.DTO.WeatherResponse;
import com.nilushiya.weather.Services.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/weather")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public ResponseEntity<WeatherResponse<List<WeatherDataDTO>>> getWeather() throws IOException {
        WeatherResponse<List<WeatherDataDTO>> response = weatherService.getWeatherData();
        return ResponseEntity.ok(response);
    }
}
