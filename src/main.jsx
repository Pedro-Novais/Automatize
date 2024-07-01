import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import AppFake from './AppFake.jsx'
import './style/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },{

    path: 'automations',
    element: <AppFake />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
