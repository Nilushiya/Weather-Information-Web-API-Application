import "../style/App.css";
import { Button} from "react-bootstrap";
import weatherIcon from '../assets/cloud.png';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect} = useAuth0();
    
  return (
    <div className='login'>
      <div className='loginbox'>
        <h5 className="app-header"><img src={weatherIcon} alt="Weather Icon" style={{ width: '50px', height: '35px' }}/>Weather App</h5>
        <Button onClick={() => loginWithRedirect(
          {authorizationParams: {
            redirect_uri: 'http://localhost:3000/weather',
            audience: "https://myapi.example.com",
          }}
        )} className='loginbut' style={{backgroundColor:"#6f42c1", border:"none",fontSize: ".9rem"}}>Login</Button>
      </div>
    </div>
  )
}

export default Login