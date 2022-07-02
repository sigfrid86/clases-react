import styled from 'styled-components'
const Estado = props => {
  const { nombre } = props
  return(
    <WrapMapa>
      <h1>El nombre del estado es: {nombre}</h1>
    </WrapMapa>
  )
}
const WrapMapa = styled.div`
  color:green;
  margin-bottom:40px;
  border-bottom: 3px solid red;
  h1{
    color:blue;
  }
`
export default Estado;

