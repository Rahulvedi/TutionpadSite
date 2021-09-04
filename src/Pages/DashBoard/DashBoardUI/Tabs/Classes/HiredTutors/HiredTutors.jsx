import React, { useState } from 'react'
import {Alarm,Nav,Time,Message,JoinClass,Profile,ProfileImg,Text ,Content, Tabs, Tab} from './HiredTutorsStyle';
import {IoMdAlarm} from 'react-icons/io';
import {BiMessageDetail} from 'react-icons/bi';
import {FaTelegramPlane} from 'react-icons/fa';
import RecentClasses from './RecentClasses/RecentClasses'
const RenderSwitch = ({ choice }) => {
    switch (choice) {
        case 0:
            return <RecentClasses/>;
        case 1:
            return <RecentClasses/>; //<WeeklyGoal/>;
        case 2:
            return  <RecentClasses/>; //<MyTutors/>;
        case 3:
            return  <RecentClasses/>; //<ClassesSchedule/>;
        default:
            return <RecentClasses/>;
    }
}
const Navbar = () => {
    const [Choice, setChoice] = useState(0)
    return (
            <Content>
                <Tabs>
                    <Tab onClick={() => setChoice(0)} className={(Choice === 0) ? 'active' : ''}>Recent Classes</Tab>
                    <Tab onClick={() => setChoice(1)} className={(Choice === 1) ? 'active' : ''}>Weekly Goal </Tab>
                    <Tab onClick={() => setChoice(2)} className={(Choice === 2) ? 'active' : ''}>My Tutors</Tab>
                    <Tab onClick={() => setChoice(3)} className={(Choice === 3) ? 'active' : ''}>Classes Schedule</Tab>
                </Tabs>
                <RenderSwitch choice={Choice} className='render-switch' />
            </Content>
    )
}

const HiredTutors = () => {
    let time= new Date().toLocaleString();
    return (
        <>
            <Nav>
                <Alarm><IoMdAlarm className='fs-3'/> Upcoming Class</Alarm>
                <Time>{time}</Time>
                <Message><BiMessageDetail className='fs-3'/> Message</Message>
                <JoinClass> <FaTelegramPlane className='fs-4'/> Join Class</JoinClass>
                <Profile>
                    <ProfileImg src='/images/ProfileImg.jpeg' />
                    <Text>Tutors Name</Text>
                </Profile>
            </Nav>
            <Navbar/> 
        </>
    )
}


export default HiredTutors
