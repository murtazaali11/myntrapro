import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Product from './components/pages/Product.jsx'
import MainContext from './context/MainContext.jsx'

let router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Product/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
    <RouterProvider router={router}/>
    </MainContext>
  </StrictMode>,
)
