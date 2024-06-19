import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav>
        {/* Link funciona como a tag 'a' do html, serve para linkar as rotas
        a questão é que ele faz isso sem reload na pagina  */}
        {/* NavLink ja vem com uma classe css imbutida para chama "active", serve para criar
        diferente estilo quando o link esta ativo, porem tambem é possivel utilizar isActive 
        para criar classes dinamicas para criar o mesmo efeito */}
        {/* <Link to="/">Home</Link>
        <Link to="about">About</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar