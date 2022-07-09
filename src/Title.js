import styled from "styled-components"
const Title = props => {
  return(
    <Wrap>
      {props.children}
    </Wrap>
  )
}
const Wrap = styled.h2`
  text-align:center ;
  margin: 10px 0 1px 0 ;
`
export default Title