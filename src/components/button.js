import styled from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 10px;
  &:hover{
    color: red;
    background-color: gray;
    border: 2px solid yellow;
  }
`

const Button1 = styled.button`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 10px;
  background: ${(props) => (props.theme === "light" ? "aqua" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "aqua")};
  &:hover{
    color: red;
    background-color: gray;
    border: 2px solid yellow;
  }
`


export { Button, Button1 }