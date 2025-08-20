package com.nilushiya.weather.Controller;

import com.nilushiya.weather.Services.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("api/weather")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public ResponseEntity<String> getWeather() throws IOException {
        return ResponseEntity.ok(weatherService.getWeatherData());
    }
}
