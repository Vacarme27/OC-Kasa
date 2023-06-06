import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oups erreur 404</h1>   
  },
  {
    path: "/appartment",
    element: (
      <div>
        <Navbar />
        <h1>Nos Appart</h1>
        <Footer />
      </div>
    ) 
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <h1>A Propos</h1>
        <Footer />
      </div>
    )  
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)