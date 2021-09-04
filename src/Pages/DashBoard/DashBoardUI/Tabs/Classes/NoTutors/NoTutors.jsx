import React from 'react'
import {NoTutor,SearchTutors,ImgSection,Img,Trending,Subject,Subjects} from './NoTutorsStyle';
import {FiTrendingUp} from 'react-icons/fi';
const NoTutors = () => {
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
            <div className=" my-2 px-1 d-flex align-items-center ">
                <Trending><FiTrendingUp/> Trending</Trending>
                <h4><b>Subjects students learning worldwide</b></h4>
            </div>
            <Subjects>
                <Subject>
                    HTML
                </Subject>
                <Subject>
                    CSS3
                </Subject>
                <Subject>
                    JavaScript
                </Subject>
                <Subject>
                    Bootstrap5
                </Subject>
                <Subject>
                    React
                </Subject>
                <Subject>
                    Git/GitHub
                </Subject>
            </Subjects>
        </>
    )
}

export default NoTutors
