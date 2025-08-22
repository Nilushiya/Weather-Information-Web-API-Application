package com.nilushiya.weather.Services.ServiceImp;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nilushiya.weather.Services.Service.CityService;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import static org.apache.logging.log4j.util.LoaderUtil.getClassLoader;
@Service
public class CityServiceImp implements CityService {
    private final ObjectMapper objectMapper = new ObjectMapper();
    @Override
    public List<String> getCityCodes() throws IOException {
        List<String> cityCodes = new ArrayList<>();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("cities.json");
        JsonNode node = objectMapper.readTree(inputStream).get("List");

        for (JsonNode city : node) {
            cityCodes.add(city.get("CityCode").asText());
        }
        return cityCodes;
    }
}
