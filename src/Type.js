import styled from "styled-components"
const Type = props => {
  return(
    <Wrap>
      {props.children}
    </Wrap>
  )
}
const Wrap = styled.h2`
  text-align:center ;
  margin: 10px 0 5px 0 ;
  font-size:14px ;
  margin-top:-5px ;
`
export default Type