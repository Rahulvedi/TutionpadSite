import React, {useState} from 'react'
import TutorId from './TutorId/TutorId'
import {MessageSection,TutorArea,MessageArea,TutorSelect,Action,Tutors}from './MessagesStyles'
import ChatSection from './ChatSection/ChatSection'
import NonSelected from './NonSelected/NonSelected'
const RenderSwitch = ({ choice }) => {
    switch (choice) {
        case 1:
            return <ChatSection/>;
        default:
            return <NonSelected/>;
    }
}

const Messages = () => {
    const [Choice, setChoice] = useState(0)
    return (
        <>
            <MessageSection>
                <TutorArea>
                    <TutorSelect>
                        <Action>All</Action>
                        <Action style={{color:"#A5A5A5"}}>Unread</Action>
                    </TutorSelect>
                    <Tutors onClick={() => setChoice(1)} className={(Choice === 1) ? 'active' : ''}> 
                        <TutorId/>      
                        <TutorId/>      
                        <TutorId/>      
                    </Tutors>
                </TutorArea>
                <MessageArea>
                <RenderSwitch choice={Choice}  />
                </MessageArea>    
            </MessageSection>
        </>
    )
}

export default Messages
