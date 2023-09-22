import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Error_page from './Modules/Error_page';
import Landing_Page from './Modules/Landing_Page';
import Navbar from './Modules/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing_Page/>}/>
        <Route path='*' element={<Error_page/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


