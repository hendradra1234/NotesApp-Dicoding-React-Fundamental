import './Styles/style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppCore from './AppCore'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <AppCore />
  </BrowserRouter>
)
