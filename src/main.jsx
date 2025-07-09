import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import * as ReactGA from "react-ga";

ReactGA.initialize('G-GHMWG28MPC');
ReactGA.pageview(window.location.pathname + window.location.search);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
