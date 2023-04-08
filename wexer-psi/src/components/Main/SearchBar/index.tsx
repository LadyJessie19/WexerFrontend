const SearchBar = () => {
  return (
    <div id="searchBar">
      <div id="leftSearchBar">
        <span>Dados Cadastrais </span>
        <span>Prontuário </span>
      </div>
      <div id="rightSearchBar">
        <span id="searchSpan">
          <input type="text" placeholder="O que você está procurando?" />
          <span><img src="/main/magnifyingGlass.svg" width={'25px'} /></span>
        </span>
        
      </div>
    </div>
  )
}

export default SearchBar