import React from 'react'
import {Alarm,Navbar,Time,Message,JoinClass,Profile,ProfileImg,Text} from './HiredTutorsStyle';
import {IoMdAlarm} from 'react-icons/io';
import {BiMessageDetail} from 'react-icons/bi';
import {FaTelegramPlane} from 'react-icons/fa';
const HiredTutors = () => {
    let time= new Date().toLocaleString();
    return (
        <>
            <Navbar>
                <Alarm><IoMdAlarm className='fs-3'/> Upcoming Class</Alarm>
                <Time>{time}</Time>
                <Message><BiMessageDetail className='fs-3'/> Message</Message>
                <JoinClass> <FaTelegramPlane className='fs-4'/> Join Class</JoinClass>
                <Profile>
                    <ProfileImg src='/images/ProfileImg.jpeg' />
                    <Text>Tutors Name</Text>
                </Profile>
            </Navbar>
            
        </>
    )
}

export default HiredTutors
