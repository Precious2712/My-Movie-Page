import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { routes } from './route'
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
