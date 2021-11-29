import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css';
import Home from './paginas/home/Home';

//No caso o grid é criado aqui porque o flexbox vai ser criado no home e importado dentro de cada grid
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
    );
}

export default App;
