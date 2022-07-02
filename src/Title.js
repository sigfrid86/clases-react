import styled from "styled-components"
const Title = props => {
  return <Titulo>{props.name}</Titulo>
}
const Titulo = styled.h1`
  color: red;
`
export default Title