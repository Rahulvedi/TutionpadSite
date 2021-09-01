import React from 'react'
import { Heading, ImgSection, Img, Details, Title, SubTitle, UpdateButton } from './CalenderSettingStyles'
const CalenderSettings = () => {
    return (
        <>
            <Heading>Calender Settings</Heading>
            <ImgSection>
                <Img src='/images/ProfileImgs/GoogleCalendar.svg' alt='ProfileImg'></Img>
            </ImgSection>
            <Details>
                <Title>Connect Google Calender with Tuitionpad</Title>
                <SubTitle>Connect your Google Calendar and synchronize all your
                    Tuitionpad Classes with your personal schedule
                </SubTitle>
                <UpdateButton>Connect</UpdateButton>
            </Details>
        </>
    )
}

export default CalenderSettings
