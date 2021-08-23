import styled from "styled-components";

export const Section=styled.section`
padding:  2rem 4rem;
@media screen and (max-width:1024px){
    padding: 1rem 3rem;
}
@media screen and (max-width:768px){
padding: 1rem 2rem;
}
@media screen and (max-width:540px){
padding: 1rem;

}
`

export const Title=styled.p`
font-size: 1.5rem;
`

export const Tabs=styled.div`
display: flex;
flex-wrap: wrap;
`
export const Tab=styled.span`
margin-right:.5rem;
color: #007770;
background: #F3FEFF;
border-radius: 2px;
padding: .5rem;
`


export const Content=styled.div`
display: flex;
padding:  2rem 0;
@media screen and (max-width:1024px){
    padding: 1rem 0;
}
@media screen and (max-width:768px){
padding: 1rem 0;
}

`
export const ClassBoards=styled.div`
width: 30%;
.activeboard{
    border-left: 2px solid rgba(11, 238, 224, 0.8);
}
`
export const Subjects=styled.div`
width: 70%;
display: grid;
padding: .5rem;
grid-template-columns: repeat(auto-fit,
						minmax(200px, 1fr));
`
export const Subject=styled.div`
margin: .5rem;
box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.08);
padding: .5rem;
`

export const Boards=styled.div`
margin: 1rem;
padding-left: .5rem;

`
export const ViewAllButton=styled.button`
margin: auto;
width: 5rem;
color: rgba(0, 119, 112, 0.8);
border: 1px solid rgba(0, 119, 112, 0.8);
`