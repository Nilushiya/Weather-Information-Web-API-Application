package com.nilushiya.weather.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class City {
    private String CityCode;
    private String CityName;
    private String Temp;
    private String Status;
}
