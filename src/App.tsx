import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//

function App() {
  return (
    <Router >
      <Navbar />
      {/* <div style={{minHeight: '100vh'}}>

      </div> */}

        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />

        </Routes>
     
      <Footer />
     
    </Router>
  );
}

export default App;
