import { recetas } from './recetas'
import styled from 'styled-components';
import Card from './Card'
import Imagen from './Imagen'
import Title from './Title';
import Type from './Type'
import Cat from './Cat'
import Download from './Download';
const App = () => {
  return (
   <Contenedor>
     {
        recetas.map(receta => {
          console.log(receta)
          return(
            <Card key={receta.id}>
              <Imagen 
                url={receta.img_gde} 
                tile={receta.title} />
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
            </Card>
          )
        })
     }
   </Contenedor>
  );
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


export default App
