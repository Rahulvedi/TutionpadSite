import React from 'react'
import TutorId from './TutorId/TutorId'
import {MessageSection,TutorArea,MessageArea }from './MessagesStyles'
import ChatSection from './ChatSection/ChatSection'
// import NonSelected from './NonSelected/NonSelected'
const Messages = () => {
    return (
        <>
        <MessageSection>
            <TutorArea>
                <TutorId/>
            </TutorArea>
            <MessageArea>
                {/* <NonSelected/> */}
                <ChatSection/>
            </MessageArea>    
        </MessageSection>
        </>
    )
}

export default Messages
