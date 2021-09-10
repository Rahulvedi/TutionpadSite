import React from 'react'
import { Container, InnerContainer,Tutors ,ProfileImg,ClassDetails,Tutor,Name,Heading,Subject,Paragraph,ProgressSection,Progress,Bar,Reviews,SubHeading,Price,Message} from './favourtieStyles'
import { AiFillCheckCircle,AiFillStar } from "react-icons/ai";
import { BiRupee,BiMessageDetail,BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";
import { GiGraduateCap} from "react-icons/gi";
import FavourtieTutorCard from './FavourtieTutorCard/FavourtieTutorCard'
const Favroutes = () => {
    return (
        <Container>
            <InnerContainer>
                <FavourtieTutorCard/>
            </InnerContainer>
        </Container>
    )
}

export default Favroutes
