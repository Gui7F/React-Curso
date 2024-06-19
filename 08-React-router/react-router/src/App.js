import './App.css';

//1-configurando react router primeiro contato
import {BrowserRouter, Routes, Route} from "react-router-dom"

//2- import de pages é igual a components porque são a mesma coisa.
// components
import NavBar from './components/NavBar';
//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Products from './pages/Products';
import { Info } from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      {/* Tudo que estiver fora das tags do routers sera rederizado em todas as paginas
      no caso o h1 sempre estara em todas as páginas */}
      <h1>Routers, no React!</h1>
      <BrowserRouter>
      {/* NavBar tem elementos do react router então por isso tem que esta aqui ela se repete
      em cada pagina porem so funciona dentro de BrowserRouter */}
      <NavBar/>
      <SearchForm/>
       <Routes>
        {/* Route recebe dois parametros o caminho da rota "Path" e o elemento que sera
        impreso naquela rota "element" */}
         <Route path='/' element={<Home/>}/>
         <Route path='about' element ={<About/>}/>
         {/* 5-routas dinâmicas */}
         <Route path ="products/:id" element ={<Products/>}/>
         {/* 6- Nested routes que é carregamento de mais parametros baseado na rota dinâmica */}
         <Route path='/products/:id/info' element={<Info/>}/>
         {/* Search page */}
         <Route path="/search" element={<Search/>}/>
         {/* 7- No matach route */}
         <Route path='*' element={<NotFound/>}/>
       </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
