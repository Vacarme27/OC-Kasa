import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './routes/router.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import './scss/variable.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navbar />      
      <Footer />
    </RouterProvider>
  </React.StrictMode>,
);