import React from 'react'
import { Section,Title,ViewAllButton,TopBar,Teachers } from '../Sec3/Sec3Styles'
import { TeacherCard } from '../../../../Components/default'
const Sec3 = () => {
    return (
        <Section>
            <TopBar>
            <Title>Most Favourite Tutors</Title>
            <ViewAllButton>View All</ViewAllButton>
            </TopBar>
            <Teachers>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
            </Teachers>
        </Section>
    )
}

export default Sec3
