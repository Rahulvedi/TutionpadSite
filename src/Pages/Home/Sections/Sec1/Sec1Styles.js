import styled from "styled-components";
import { Form } from "react-bootstrap";
export const Section=styled.section`
position: relative;
width: 100%;
height: calc(100vh - 10rem);
@media screen and (max-width:540px){
    height: 100vh;
}
`
export const BannerImg=styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background: url('/images/BannerImg.jpeg') no-repeat center top/cover;
z-index: -1;
::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:#007770;
    opacity: 0.8;
    z-index: 1;
}
`


export const Content=styled.div`
width: 100%;
height: 100%;
padding: 4rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media screen and (max-width:1024px){
    padding: 3rem;
    flex-direction: row;
}
@media screen and (max-width:768px){
padding: 2rem;
}
@media screen and (max-width:540px){
padding: 1rem;
flex-direction: column;
}
`

// Title and SubTitle


export const TextWrapper=styled.div`
width: 100%;
@media screen and (max-width:1024px){
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media screen and (max-width:540px){
    width: 100%;
    justify-content: center;
}
`
export const Title=styled.h1`
font-style: normal;
font-weight: bold;
font-size: 2.5rem;
line-height:3.125rem;
color: #FFFFFF;
text-align: center;
@media screen and (max-width:1024px){
    font-size:2rem;
    line-height:2.125rem;
}
@media screen and (max-width:768px){
    font-size: 1.5rem;
    line-height:2.125rem;
}
`
export const SubTitle=styled.p`
font-style: normal;
font-weight: 500;
font-size: 1.25rem;
line-height:1.5625rem;
color: #FFFFFF;
text-align: center;
@media screen and (max-width:1024px){
    font-size: 1rem;
}
`




// SearchBar Wrapper

export const SearchBarWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:1024px){
    margin-left: 2rem;
}
@media screen and (max-width:540px){
    margin: 0 1rem;
}
`

export const Tabs=styled.div`
width: 100%;
display: flex;
align-items: center;
`

export const Tab=styled.span`
color: white;
display: flex;
align-items: center;
padding: .5rem;

`
export const Input=styled.input`
border: none;
border-bottom: 1px solid rgba(0, 0, 0, 0.29);
max-width: 8rem;
:focus{
    border: none;
}
`

export const Label=styled.label`
margin-left:5px;
color: rgba(0, 0, 0, 0.59);
@media screen and (max-width:768px){
    font-size: .8rem;
}
`

export const SearchBar=styled(Form)`
position: relative;
background-color: white;
display: flex;
padding: 1rem;
border-radius: 10px;

align-items: center;
@media screen and (max-width:1024px){
    flex-direction: column;
}
`
export const Group=styled(Form.Group)`
display: flex;
flex-direction: column;
margin: 1rem;
margin-right: 3rem;
@media screen and (max-width:1024px){
    align-items: center;
    margin-right: 0;
}
`

export const SearchButton=styled.button`
width: 159px;
height: 57px;
position: absolute;
border: none;
outline: none;
color: white;
right: 1rem;
cursor: pointer;
background: rgba(0, 119, 112, 0.8);
border-radius: 10px;
@media screen and (max-width:1024px){
    position: unset;
}
`

export const Heading=styled.p`
color: white;
margin: 0;
font-size: 1rem;
`
export const PopularTab=styled.span`
color: white;
margin: .5rem;
padding: 0 .4rem;
cursor: pointer;
background: rgba(196, 196, 196, 0.21);
`