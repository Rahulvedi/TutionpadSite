import React, { useState } from 'react'
import { Heading, Info, Text, ClassReview, UpdateButton, Options } from './ClassConfirmationStyles'
const ClassConfirmation = () => {
    const [Choice, setChoice] = useState('')
    return (
        <>
            <Heading>Class Confirmation Settings</Heading>
            <hr/>
            <Info>
                <Text>
                    Tuitionpad will confirm your attended classes automatically 12 hours after the scheduled end time unless
                    you report an issue. When a class is confirmed, your tutor gets paid.

                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                    Autoconfirmation for lessons in the Preply Space
                </Text>
                <Text>
                    Autoconfirm tracks the time you spend connected with your tutor during live class.
                    After 15 minutes of a lesson completion, it is confirmed automatically and we release your tutor's payment.
                    If there are any issues, please contact us right after the lesson and we'll help you find a solution.
                </Text>
            </Info>
            <ClassReview>
                <Text style={{ color: '#007770' }} >Choose your class review time between 5 Minutes to 2 Hours-</Text>
                <Options onClick={()=>{setChoice('1')}} className={(Choice === '1') ? 'active' : ''}>5 Minutes After class ends</Options>
                <Options onClick={()=>{setChoice('2')}} className={(Choice === '2') ? 'active' : ''}>15 Minutes After class ends</Options>
                <Options onClick={()=>{setChoice('3')}} className={(Choice === '3') ? 'active' : ''}>30 Minutes After class ends</Options>
                <Options onClick={()=>{setChoice('4')}} className={(Choice === '4') ? 'active' : ''}>60 Minutes After class ends</Options>
                <Options onClick={()=>{setChoice('5')}} className={(Choice === '5') ? 'active' : ''}>2 Hours After class ends</Options>
            </ClassReview>
            <UpdateButton>Update</UpdateButton>
        </>
    )
}

export default ClassConfirmation
