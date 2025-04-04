import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import TrioConclave from './EVENTS.jsx/TrioConclave.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App /> 
  </StrictMode>
</BrowserRouter>,
)
