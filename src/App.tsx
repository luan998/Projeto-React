import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/estaticos/temas/listaTema/ListaTema';
import ListaPostagem from './components/estaticos/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/estaticos/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/estaticos/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/estaticos/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/estaticos/temas/deletarTema/DeletarTema';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <div style ={{minHeight: '100vh'}}>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/temas'>
              <ListaTema />
            </Route>

            <Route path='/postagens'>
              <ListaPostagem />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
          </div>
        </Switch>
        <Footer/>
      </Router>
    </>
    );
}

export default App;
