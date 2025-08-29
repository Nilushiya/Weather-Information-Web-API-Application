package com.nilushiya.weather.Services.ServiceImp;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nilushiya.weather.DTO.WeatherDataDTO;
import com.nilushiya.weather.DTO.WeatherResponse;
import com.nilushiya.weather.Services.Service.CityService;
import com.nilushiya.weather.Services.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
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
    @Override
    public WeatherResponse<List<WeatherDataDTO>> getWeatherData() throws IOException {
        List<String> cityCodes;
        List<WeatherDataDTO> weatherList = new ArrayList<>();
        List<String> errors = new ArrayList<>();

        try {
            cityCodes = cityService.getCityCodes();
        }catch (IOException e){
            return new WeatherResponse<>(
                    "fail",
                    "City codes could not be loaded",
                    Collections.emptyList(),
                    List.of(e.getMessage())
            );
        }

        for (String id : cityCodes) {
            try{
                String url = baseUrl + "?id=" + id + "&units=metric&appid=" + apiKey;
                String weatherDataById = restTemplate.getForObject(url, String.class);
                WeatherDataDTO weatherDataDTO = objectMapper(weatherDataById);
                weatherList.add(weatherDataDTO);
            } catch (Exception e) {
                errors.add("Failed to fetch weather for city ID: " + id + " -> " + e.getMessage());
            }
        }

        String status = errors.isEmpty() ? "success" :
                (!weatherList.isEmpty() ? "partial-success" : "failure");

        String message = errors.isEmpty() ? "Weather data fetched successfully" :
                (!weatherList.isEmpty() ? "Some cities failed to fetch" : "All cities failed to fetch");

        return new WeatherResponse<>(status, message, weatherList, errors);
    }
    public WeatherDataDTO objectMapper(String weatherDataById) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(weatherDataById);

        String cityName = rootNode.path("name").asText();
        String weatherDescription = rootNode.path("weather").get(0).path("description").asText();
        double temp = rootNode.path("main").path("temp").asDouble();
        WeatherDataDTO weatherData = new WeatherDataDTO(cityName, weatherDescription, temp);

        return weatherData;
    }
}
