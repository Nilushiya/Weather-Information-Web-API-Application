import "./style/App.css";
import {BrowserRouter ,  Routes, Route} from "react-router-dom";
import Weather from './page/Weather';
import Login from './page/Login';
import SingleWeatherData from "./component/WeatherDetail";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/weather/:cityName" element={<SingleWeatherData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


