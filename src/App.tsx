import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';

import './App.css';
import { Grid } from '@material-ui/core';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Login />
    </>
  );
}

export default App;
