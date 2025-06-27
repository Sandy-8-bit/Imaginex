import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
 
  <StrictMode>
    <App />
  </StrictMode>
   </BrowserRouter>
)
