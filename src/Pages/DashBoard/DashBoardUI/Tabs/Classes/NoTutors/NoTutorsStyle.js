import styled from "styled-components";
export const NoTutor = styled.div`
padding:2rem .6rem ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ImgSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
@media screen and (max-width:540px){
 flex-direction: column;
}
`
export const Img = styled.img`
 
  @media screen and (max-width:768px){
    width: 200px;
    height:155px;
  }
  @media screen and (max-width:540px){
 margin-bottom: 1rem;
}
`

export const SearchTutors=styled.button`
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
export const Trending=styled.button`
border: none;
outline: none;
padding: .7rem 1.3rem;
background-color:#6BFCF3;
border-radius: 10px;
font-size: 1rem;
font-weight: 500;
margin-right: .8rem;
`
export const Subjects = styled.div`
padding:1rem .76rem;
display: flex;
justify-content: space-between;
@media screen and (max-width:768px){
    flex-direction:column;
  }

`
export const Subject = styled.div`
padding:4.5rem ;
margin:1rem;
background:grey;

`
