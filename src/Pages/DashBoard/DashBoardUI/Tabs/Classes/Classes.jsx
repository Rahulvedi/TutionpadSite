import React from 'react'
import NoTutors from './NoTutors/NoTutors'
import HiredTutors from './HiredTutors/HiredTutors'
import { Container } from './ClassesStyles'

const Classes = ({match}) => {
    return (
        <Container>
            {/* <NoTutors/> */}
            <HiredTutors match={match}/>
        </Container>
    )
}

export default Classes
