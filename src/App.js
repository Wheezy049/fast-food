import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Main from './components/main/MainPage';
import Navbar from './components/navbar/Navbar';
import Checkout from './components/checkout/Checkout';
import Success from './components/success/Success';

function App() {
  return (
    <div  style={{backgroundImage: `url('/background.svg')`, overflow:'hidden', height: '100%'}}>
      <Routes>
        <Route path='/' element={ <Navbar />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main"  element={ <Main />  } />
        <Route path='/checkout' element={ <Checkout />} />
        <Route path='/success' element={<Success /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

