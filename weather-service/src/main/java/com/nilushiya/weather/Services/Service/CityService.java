package com.nilushiya.weather.Services.Service;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
@Service
public interface CityService {
    List<String> getCityCodes() throws IOException;
}
