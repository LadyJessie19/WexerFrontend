import './style.css'

const SearchInputWexer = () => {
  return (
    <>
        <div className="searchWexer">
            <div className="searchInputWexer">
                <input className='inputSearchWexer' type="search" placeholder="Pesquisar"/>
                <button className='btnSearchWexer'> <img src="/search-input/magnify.svg" /> Filtrar</button>
            </div>
                <small className='smallSearchWexer'> <img src="/search-input/bottom-arrow.svg" /> Filtro simples </small>
        </div>
    </>
  )
}

export default SearchInputWexer