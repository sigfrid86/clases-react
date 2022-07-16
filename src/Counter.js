import { useState } from 'react'
import styled from "styled-components"
const Counter = props => {
  const [count, setCount] = useState(10)
  const minusCount = () => {
    return count > 0 ? setCount(count - 1) : false
  }
  const sumar = () => {
    setCount(count + 1)
  }
  return(<>
    <Wrap>
      <Button onClick={minusCount}>-</Button>
      <Number>{count}</Number>
      <Button onClick={sumar}>+</Button>
    </Wrap>

  </>)
}
const Wrap = styled.div`
  width:100% ;
  padding: 10px 5% ;
  display: grid ;
  grid-template-columns: 40px calc(100% - 100px) 40px;
`
const Button = styled.button`
  background-color: black ;
  border: none;
  color:#FFF;
  width:30px ;
  height:30px ;
  border-radius:30px ;
  cursor: pointer;
`
const Number = styled.div`
  font-weight: bold;
  text-align: center ;
  align-self:center ;
`
export default Counter