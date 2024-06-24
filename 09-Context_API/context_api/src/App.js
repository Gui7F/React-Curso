import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//components
import NavBar from './components/NavBar';
import  Home  from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <h1>Context API </h1>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='projects' element={<Projects/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
