import { personajes } from './personajes'
import styled from 'styled-components';
const App = () => {
  return (<>
   <Contenedor>
      {
        personajes.map( personaje => {
          console.log(personaje)
          return (
            <Card>
             
              <Imagen>
                <img src={personaje.image} alt="" />
              </Imagen>
              <div>
                <Title>{personaje.name}</Title>
                <Gender>{personaje.gender}</Gender>
              </div>
              <ListEpisode>
                {personaje['episode'].map((e,i) => {
                  return(
                    <a href={e}>Ver episodio {i}</a>
                  )
                })}
              </ListEpisode>
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
  grid-template-columns: repeat(4, 1fr) ;
  gap:30px;
`
const Card = styled.div`
  width: 100% ;
  border-radius:10px ;
  border: 1px solid grey ;
  overflow: hidden ;
  display: grid ;
  grid-template-columns: 1fr 1fr ;
`
const Imagen = styled.div`
  img{
    display:block ;
    max-width:100px ;
  }
`

const Title = styled.h2`
  color: #030303 ;
`
const Gender = styled.h2`
  color: grey ;
  font-size: 12px ;
`
const ListEpisode = styled.div`
  width:100% ;
  height:100px ;
  overflow-y: scroll ;
  a{
    display:block ;
  }
`
export default App
