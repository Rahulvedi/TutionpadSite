import React from 'react'
import { Section,Title,Tabs,Tab,Content,ClassBoards,Subjects,Boards,Subject,ViewAllButton} from './Sec2Styles'
const Sec2 = () => {
    return (
        <Section>
           <Title>Categories</Title>
           <Tabs>
               <Tab>Classes 1 to 5</Tab>
               <Tab>Competitive Exams</Tab>
               <Tab>Tech Skills</Tab>
               <Tab>Communication</Tab>             
               <Tab>Languages</Tab>             
           </Tabs>
        <Content>
            <ClassBoards>
                <Boards className={'activeboard'}>CBSE</Boards>
                <Boards>Rajasthan State Board</Boards>
                <Boards>Delhi State Board</Boards>
                <Boards>Himachal State Board</Boards>
                <Boards>Haryana State Board</Boards>
            </ClassBoards>
            <Subjects>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
                <Subject>Maths</Subject>
            </Subjects>
        </Content>
        <ViewAllButton>View All</ViewAllButton>
        </Section>
    )
}

export default Sec2

