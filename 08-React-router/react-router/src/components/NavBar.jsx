import { Link } from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav>
        {/* Link funciona como a tag 'a' do html, serve para linkar as rotas
        a questão é que ele faz isso sem reload na pagina  */}
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
  )
}

export default NavBar