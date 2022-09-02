import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListaTema from './componentes/temas/listatema/Listatema';
import ListaPostagem from './componentes/postagens/listapostagem/Listapostagem';

//

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
