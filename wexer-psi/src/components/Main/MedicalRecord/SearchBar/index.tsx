import { Link } from "react-router-dom"

const SearchBar = () => {
  return (
    <div id="searchBar">
      <div id="leftSearchBar">
        <span><Link to="/registro-paciente">Dados Cadastrais</Link> </span>
        <span><Link to="/prontuario">Prontuário</Link></span>
      </div>
      <div id="rightSearchBar">
        <span className="searchSpan">
          <input type="text" placeholder="O que você está procurando?" />
          <img src="/main/magnifyingGlass.svg" width={'25px'} />
        </span>
      </div>
    </div>
  )
}

export default SearchBar