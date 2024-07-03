import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//library bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css';


//pages
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

//componentes 
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
