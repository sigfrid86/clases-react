import styled from 'styled-components';
import { useEffect, useState } from 'react';
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(dataResponse => {
      setIsLoading(false)
      setData(dataResponse.results)
    })
  },[page])
  return(<>
    {isLoading &&
      <h1>Cargando...</h1>
    }
    {!isLoading &&
      <div>
        <h1>Los personajes de la pagina {page}:</h1>
        <ul>
          {
            data.map(character => (<li key={character.id}>{character.name}</li>))
          }
        </ul>
        <button onClick={()=>setPage(page + 1)}>Siguiente</button>
      </div>
    }
  </>);
}


export default App
