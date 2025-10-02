//Cria um novo componente React chamado header
import {Link} from 'react-router-dom'
function Header() {
  //O componente retorna um elemento JSX que representa um cabeçalho HTML
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/"><img src="src/assets/react.svg" alt="Logo React" /></Link>
        </div>
        <div className="nav-links">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
          <Link to="/contact2">Contact2</Link>
        </div>
      </nav>
    </header>
  )
}
//Exporta o componente Header para que possa ser importado e usado em outros arquivos
export default Header

