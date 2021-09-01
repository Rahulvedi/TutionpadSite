import styled from "styled-components";
import {Form} from 'react-bootstrap'
export const Heading = styled.h3``;

export const Details=styled(Form)`
padding: 2rem;
`
export const Group=styled(Form.Group)`
padding:.65rem;
border-radius:10px;
background:#C8FFFC;
display: flex;
align-items: center;
`
export const Label=styled.label`
font-size:1rem;
margin-left: 1rem;
`
export const Input=styled.input`
  background-color: black;
  width: 25px;
  height:25px;
  border-radius: 50% ;

    /* background:#6BFCF3;
    color:#007770;
    font-size:1.5rem;
    padding:.5rem;
    border-radius:20rem; */
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