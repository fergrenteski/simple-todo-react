import { PropTypes } from "prop-types";

// Componente para Pesquisar tarefas
function Search({ search, setSearch }) {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Digite para pesquisar."/>
        
    </div>
  )
}

// Definição das propriedades esperadas pelo componente
Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default Search