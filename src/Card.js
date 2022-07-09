import styled from "styled-components"
const Card = props => {
  return(
    <Wrap>
      {props.children}
    </Wrap>
  )
}
const Wrap = styled.div`
  min-height:10px ;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow:hidden ;
`
export default Card