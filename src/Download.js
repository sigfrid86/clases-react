import styled from "styled-components"
const Download = props => {
  return(
    <Wrap href={`https://api.mindfood.mx/uploads/pdf/${props.url}`}>
      Descargar
    </Wrap>
  )
}
const Wrap = styled.a`
display: block ;
  margin:10px 5px;
  padding:5px;
  text-align:center ;
  border-radius: 5px ;
  background: black ;
  color: white ;
  text-decoration: none ;
  transition: all .3s ease-in-out ;
  &:hover{
    transform: scale(1.01) ;
  }
`
export default Download