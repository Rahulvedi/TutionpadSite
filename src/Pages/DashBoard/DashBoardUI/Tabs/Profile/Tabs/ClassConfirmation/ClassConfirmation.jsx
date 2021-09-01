import React from 'react'
import { Heading, Info, Text ,ClassReview,UpdateButton} from './ClassConfirmationStyles'
const ClassConfirmation = () => {
    return (
        <>
            <Heading>Class Confirmation Settings</Heading>
            <Info>
                <Text>
                    Tuitionpad will confirm your attended classes automatically 12 hours after the scheduled end time unless
                    you report an issue. When a class is confirmed, your tutor gets paid.

                </Text>
                <Text style={{fontWeight:'bold'}}>
                Autoconfirmation for lessons in the Preply Space
                </Text>
                <Text>
                    Autoconfirm tracks the time you spend connected with your tutor during live class.
                    After 15 minutes of a lesson completion, it is confirmed automatically and we release your tutor's payment.
                    If there are any issues, please contact us right after the lesson and we'll help you find a solution.
                </Text>
            </Info>
            <ClassReview>
                <Text style={{color:'#007770'}}>Choose your class review time between 5 Minutes to 2 Hours-</Text>
            </ClassReview>
                <UpdateButton>Update</UpdateButton>
        </>
    )
}

export default ClassConfirmation
