package com.nilushiya.weather.Services.ServiceImp;

import com.nilushiya.weather.Services.Service.CityService;
import com.nilushiya.weather.Services.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;
@Service
public class WeatherServiceImp implements WeatherService {
    private final RestTemplate restTemplate = new RestTemplate();
    @Value("${weather.api.base-url}")
    private String baseUrl;
    @Value("${weather.api.key}")
    private String apiKey;
    @Autowired
    private CityService cityService;
    @Cacheable("weatherData")
    @Override
    public String getWeatherData() throws IOException {
        List<String> cityCodes = cityService.getCityCodes();
        String ids = String.join(",", cityCodes);
        String url = baseUrl + "?id=" + ids + "&units=metric&appid=" + apiKey;
        return restTemplate.getForObject(url, String.class);
    }
}
