import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Natural from './Natural.jsx';
import Amstrong from './Amstrong';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Natural number = '203'></Natural>
    <Amstrong number="153"></Amstrong> 
  </StrictMode>,document.getElementById("root")
);
