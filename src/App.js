import { useState, useEffect } from 'react';
import { recetas } from './recetas'
import styled from 'styled-components';
import Card from './Card'
import Imagen from './Imagen'
import Title from './Title';
import Type from './Type'
import Cat from './Cat'
import Download from './Download';
import Counter from './Counter';
const App = () => {
  const [filter, setFilter] = useState('')
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
    if(filter !== ''){
      let recetasFiltradas = recetas.filter(receta => receta.tipo === filter)
      setRecipes(recetasFiltradas)
    }else{
      setRecipes(recetas)
    }
  },[filter])
  return (<>
    <Menu>
      <button
        className={filter === 'bebida' ? 'selected' : ''}
        onClick={()=>setFilter('bebida')}>Bebida</button>
      <button
        className={filter === 'Desayuno' ? 'selected' : ''}
        onClick={()=>setFilter('Desayuno')}>Desayuno</button>
      <button 
        className={filter === 'Sopa' ? 'selected' : ''}
        onClick={()=>setFilter('Sopa')}>Sopa</button>
      <button
        className={filter === 'Ensalada' ? 'selected' : ''}
        onClick={()=>setFilter('Ensalada')}>Ensalada</button>
      <button
        onClick={()=>setFilter('')}>X</button>
    </Menu>
    {filter !== ''  &&
      <FilterTitle>Tu filtro es: {filter}</FilterTitle>
    }
   <Contenedor>
     {
        recipes.map(receta => {
          return(
            <Card key={receta.id}>
              <Imagen 
                url={receta.img_gde} 
                tile={receta.title} 
              />
              <Title>{receta.title}</Title>
              <Type>{receta.tipo}</Type>
              <CatContainer>
                {receta.categorias.map(categoria => {
                  return(
                    <Cat 
                      key={categoria.id}
                      url={categoria.icon} 
                      title={categoria.title}
                    />
                  )
                })}
              </CatContainer>
              <Download 
                url={receta.pdf}
              />
              <Counter/>
            </Card>
          )
        })
     }
   </Contenedor>
  </>);
}
const Contenedor = styled.section`
  padding: 50px 5% ;
  display: grid ;
  grid-template-columns: repeat(4, 3fr) ;
  gap:30px;
`
const CatContainer = styled.section`
  display: flex ;
  flex-wrap: wrap ;
  gap:5px;
  padding:5px ;
`
const Menu = styled.div`
  display:flex ;
  justify-content:center ;
  gap:10px;
  padding-top: 50px ;
  button{
    background-color: #FFF ;
    padding:10px;
    border: 1px solid black ;
    border-radius:10px ;
    cursor: pointer;
    &.selected{
      background-color: black ;
      color:#FFF;
    }
  }
`
const FilterTitle = styled.div`
  text-align:center;
  margin-top:10px ;
`


export default App
