import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EmployeeContextProvider } from "./context/EmployeeContext";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
    
  </BrowserRouter>,
);


