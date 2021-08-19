import styled from "styled-components";
export const Section = styled.section`
  padding: 3rem 4rem;
  background-color: #eafaf1;
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


export const Container=styled.div`
display: flex;
justify-content: center;
margin: 4rem 5rem;
/* @media screen and (max-width:1024px){
    flex-direction: column-reverse;
} */
`
export const Selector=styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 0px 0px 30px 5px rgb(0 0 0 / 13%);
border-radius: 10px;
.options{
    display: flex;
    align-items: center;
    margin: .5rem;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
}
.option{
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
}
.icon{
    color: #1abc9c;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
}
.active{
    background-color:#1abc9c;
    .icon{
        color: white;
    }
    .option{
        color: white;
    }
}
`
export const Content=styled.div`
width: 70%;
margin-left: 5rem;
.content{
    display: flex;
    align-items: center;
}
.title{
    font-size: 1.5rem;
    font-weight: bold;
}
.content-img{
    height: 250px;
    width: 250px;
    margin-right: 1rem;
}
`