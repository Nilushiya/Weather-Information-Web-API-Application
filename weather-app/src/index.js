import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6puk8i0jz4kmxnge.au.auth0.com"
    clientId="DuZbynr8iA1pnboKk6CQxeMqdqNSrlu1"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://myapi.example.com",
    }}
  >
    <App />
  </Auth0Provider>
);
