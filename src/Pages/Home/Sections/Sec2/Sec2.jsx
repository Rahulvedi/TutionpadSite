import React from 'react'
import { Section,Title,Tabs,Tab} from './Sec2Styles'
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
        </Section>
    )
}

export default Sec2

