import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'; // Correct import for Routes

import Mainpage from './Mainpage.jsx';
import Home from './pages/home.jsx';
import Login from './pages/loginpage.jsx';
import Register from './pages/register_page.jsx';
import BookingCar from './pages/bookingCar.jsx';

const App = () => {
  return (
    <>
      {/* <Mainpage></Mainpage>  */}
      <BrowserRouter>
        <Routes> {/* Correct casing for Routes */}
          <Route path='/' element={<Home />} /> {/* Use element prop instead of component */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bookingCar' element={<BookingCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
