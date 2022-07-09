import styled from "styled-components"
const Imagen = props => {
  return(
    <MySyles>
      <img 
        src={`https://api.mindfood.mx/uploads/${props.url}`} 
        alt={props.tile} 
      />
    </MySyles>
  )
}
const MySyles = styled.div`
  width:100%;
  height:200px ;
  overflow:hidden ;
  img{
    display:block ;
    width:100%;
    height:100%;
    object-fit:cover;
  }
`
export default Imagen