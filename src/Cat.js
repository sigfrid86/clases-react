import styled from "styled-components"
const Cat = props => {
  return(
    <Wrap>
      <img 
        src={`https://mindfood.mx/svg/icons/${props.url}`} 
        alt={props.title} 
      />
    </Wrap>
  )
}
const Wrap = styled.div`
  img{
    display: block ;
    width: 30px;
  }
`
export default Cat