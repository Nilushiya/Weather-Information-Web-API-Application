import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    // domain="dev-h47an2orx06cwhog.us.auth0.com"
    // clientId="dSrlQwa5pJw9NmwYUMauDNxgPqiXMCpp"
    // authorizationParams={{
    //   redirect_uri: window.location.origin
    // }}
  >
    <App />
  </Auth0Provider>
);
