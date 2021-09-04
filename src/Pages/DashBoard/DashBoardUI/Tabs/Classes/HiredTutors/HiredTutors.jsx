import React from 'react'
import {NoTutor,SearchTutors,ImgSection,Img} from './HiredTutorsStyle';
// import {FiTrendingUp} from 'react-icons/fi';
const HiredTutors = () => {
    return (
        <>
            <NoTutor>
                <ImgSection>
                     <Img src='/images/Classes/ClassesHome.svg' alt='HomeImg'/>
                 </ImgSection>
                <h3 className="py-1"><b>It seems you havn’t hired any tutor yet!</b></h3>
                <p>Please find a suitable teacher that fits in your requirements
                and fix a demo class....you will see that here</p>
                <SearchTutors>Search Tutors</SearchTutors>
            </NoTutor>
            
        </>
    )
}

export default HiredTutors
