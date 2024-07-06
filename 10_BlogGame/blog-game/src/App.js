import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//library bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css';

//Context para validar se o usuário esta logado ou não
import { AuthContextProvider } from './context/AuthContext';

//onAuthStateChanfed é uma função interna do firebase que mapea se o usuário foi autenticado com sucesso
import { onAuthStateChanged } from 'firebase/auth';
//hooks 
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAthentication';
//pages
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

//componentes 
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() =>{

    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })

  },[auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthContextProvider value={user}>
      <BrowserRouter>
      <div className='containerComponents'>
      <Navbar/>
       <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path ='/login' element={<Login/>}/>
        </Routes>
       </div>
       <Footer/>
       </div>
      </BrowserRouter>   
      </AuthContextProvider>
    </div>
  );
}

export default App;
