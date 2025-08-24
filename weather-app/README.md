# Weather App 🌤️
A React-based weather application that shows current weather details for different cities.  
Users can view temperature, conditions, and more, with a modern UI and Auth0 integration.

## Features
- Display temperature, cityName, and description
- Detailed weather page with dynamic backgrounds
- Cloudy background effects (PNG overlay)
- Authentication with Auth0 (optional)
- Responsive UI

## Tech Stack
- React
- React Router
- Axios (for API requests)
- FontAwesome (icons)
- CSS /  Bootstrap  / React-Bootstrap (depending on what you used)
- SpringBoot 
- Auth0 (for login & MFA)
- JWT Authentication (with Auth0 integration)
- REST API
- OpenWeather API (if you used it)

## Setup Instructions
- node version : v20.10.0
- java version : 17
-git clone "https://github.com/Nilushiya/Weather-Information-Web-API-Application.git"

# Backend
         - cd weather-service
         - mvn clean install
         - PORT=8080
         - mvn spring-boot:run

# Frontend 
         - cd weather-app
         - npm install
         - PORT=3000
         - npm start

# login
         - Email : careers@fidenz.com
         - password : Pass#fidenz
         - before verify the email other vice can't see the email MFA verification
         - for the MFA check your Email or OTP check in yout google Authenticator 