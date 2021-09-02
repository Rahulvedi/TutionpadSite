import styled from "styled-components";
import {Form} from 'react-bootstrap'
export const Heading = styled.h3``;

export const Details=styled(Form)`
padding: 2rem;
@media screen and (max-width:768px){
  padding: 1rem;
}
@media screen and (max-width:540px){
  padding: 0;
}
`
export const Group=styled(Form.Group)`
padding:.65rem;
border-radius:10px;
margin-bottom:3rem;
background:#C8FFFC;
display: flex;
align-items: center;
`
export const Label=styled.label`
font-size:1rem;
margin-left: 1rem;
`
export const Input=styled.input`
  height: 35px;
  width: 35px;
  margin: .2rem .65rem;
    /* background:#6BFCF3;
    color:#007770; */
`

export const UpdateButton=styled.button`
border: none;
outline: none;
padding: .7rem 1.3rem;
background-color: #007770;
border-radius: 10px;
color: white;
font-size: 1rem;
font-weight: 500;
display: block;
margin-top: 2rem;
margin: auto;
`