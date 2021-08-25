import styled from "styled-components";
export const Section = styled.section`
  padding: 3rem 4rem;
  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 540px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  color: #313856;
  margin-bottom: 12px;
  text-align: center;
`;
export const SubTitle = styled.p`
  text-align: center;
  margin-left: 1.5rem;
  margin-right:  1.5rem;
  margin-bottom: 25px;
  font-weight: 400;
  font-family: "Muli";
  font-size: 1.2rem;
`;

export const Content=styled.div`
display: flex;
width: 70%;
margin: auto;
@media screen and (max-width:924px){
    flex-direction: column;
}
@media screen and (max-width:768px){
    flex-direction: column;
    width: 100%;
}

`

export const TutionpadTutors=styled.div`
width: 50%;
margin: 1rem;
@media screen and (max-width:924px){
    width: 100%;
}
@media screen and (max-width:610px){
  margin: 0rem;
}
`
export const OfflineTutors=styled.div`
width: 50%;
margin: 1rem;
@media screen and (max-width:924px){
    width: 100%;
}
@media screen and (max-width:610px){
  margin: 0rem;
}
`
export const Row=styled.div`
display: flex;
padding: .5rem;
margin: 1rem .5rem ;
border-radius: 5px;
align-items: center;
background-color: ${({varient})=>(varient?'rgba(64,0,255,0.05)':'rgba(248,89,106,0.09)')};
`
export const Text=styled.p`
margin: 0;
`
export const Icon=styled.div`
margin-right: 1rem;
font-size: 1.5rem;
color: ${({varient})=>(varient?'#4000ff':'#f8596a')};
`
