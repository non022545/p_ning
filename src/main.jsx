import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Serprise from './pages/Surprise.jsx'
import Login from './pages/Login.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/Serprise',
    element: <Serprise />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
