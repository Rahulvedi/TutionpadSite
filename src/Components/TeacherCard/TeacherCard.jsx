import React from 'react'
import { Teacher, TeacherName, TeacherImg, Location, PricePerClass ,TeacherInfo,Rating,StarIcon} from './TeacherCardStyles'

const TeacherCard = ({rating}) => {
    return (
        <Teacher style={{ width: '16rem' }}>
            <TeacherImg variant="top" src="/images/teacher/Teacher1.svg" />
            <TeacherInfo>
                <Location> jaipur,India</Location>
                <TeacherName>Mr. Amit Kumar Sharma</TeacherName>
                <PricePerClass>INR 500/Per Class</PricePerClass>
                <Rating>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </Rating>
            </TeacherInfo>
        </Teacher>
    )
}

export default TeacherCard
