import styled from "styled-components";
export const Heading=styled.h3``
export const Info=styled.div`
padding: 2rem;
@media screen and (max-width:768px){
    padding: 1rem;
}
`

export const Text=styled.p``

export const ClassReview=styled.div`
display: flex;
flex-direction: column;
align-items: center;
.active{
    border: 2px solid #007770;
    color: #007770;
}
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
margin: auto;
margin-top: 2rem;
`
export const Options=styled.div`
cursor: pointer;
width: 50%;
text-align: center;
padding: .5rem;
margin: .5rem;
background: #FEFEFE;
border: 2px solid #DBDBDB;
box-sizing: border-box;
border-radius: 5px;
color:#344645;
&:hover{
    border: 2px solid #007770;
    color: #007770;
}
@media screen and (max-width:768px){
    width: 100%;
}

`