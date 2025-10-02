//Cria um novo componente React chamado Footer
function Footer({ year, madeWith }) {
  //O componente retorna um elemento JSX que representa um rodapé HTML
  return <footer>
    <p>&copy;{year} Meu site React - Feito com {madeWith}</p>
  </footer>
}
//Exporta o componente Footer para que possa ser importado e usado em outros arquivos
export default Footer