import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style/App.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Cloud, Divide, X } from "lucide-react";
import weatherIcon from './assets/cloud.png';
import { useAuth0 } from '@auth0/auth0-react';
import {BrowserRouter ,  Routes, Route} from "react-router-dom";
import Weather from './page/Weather';
import Login from './page/Login';

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading, user ,getAccessTokenSilently} = useAuth0();

//   if(!isAuthenticated){
//   return(
//     <div className='login'>
//       <div className='loginbox'>
//         <h5 className="app-header"><img src={weatherIcon} alt="Weather Icon" style={{ width: '50px', height: '35px' }}/>Weather App</h5>
//         <Button onClick={() => loginWithRedirect(
//           {authorizationParams: {
//             redirect_uri: 'http://localhost:3000/weather',
//           }}
//         )} className='loginbut' style={{backgroundColor:"#6f42c1", border:"none",fontSize: ".9rem"}}>Login</Button>
//       </div>
//     </div>
//   )
// }
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


