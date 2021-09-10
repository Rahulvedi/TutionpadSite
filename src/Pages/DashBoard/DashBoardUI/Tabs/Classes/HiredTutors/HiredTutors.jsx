import React, { useState } from 'react'
import { TopBar, Left, Right, AlarmButton, Message, JoinNow, TutorInfo, ProfileImg, Name, ClassDetails, NavigationBar, NavigationItem, Content } from './HiredTutorsStyle';
import { IoMdAlarm } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecentClasses from './Tabs/RecentClasses/RecentClasses.jsx'
import WeeklyGoals from './Tabs/WeeklyGoals/WeeklyGoals';
const HiredTutors = ({ match }) => {
    console.log(match)
    return (
        <>
            <TopBar>
                <Left>
                    <AlarmButton><IoMdAlarm style={{ fontSize: '1.5rem' }} />Upcoming Class</AlarmButton>
                </Left>
                <Right>
                    <Message><BiMessageDetail />Message</Message>
                    <JoinNow><FaTelegramPlane />Join Class</JoinNow>
                    <TutorInfo>
                        <ProfileImg src='/images/ProfileImg.jpg' />
                        <Name>tutorName</Name>
                    </TutorInfo>
                </Right>
            </TopBar>
            <ClassDetails>
                <Router>
                    <NavigationBar>
                        <NavigationItem to={`${match.path}`}>Recent Classes</NavigationItem>
                        <NavigationItem to={`${match.path}/weekly-goals`}>Weekly Goal</NavigationItem>
                        <NavigationItem to={`${match.path}/my-tutors`}>My Tutors</NavigationItem>
                        <NavigationItem to={`${match.path}/classes-schedule`}>Classes Schedule</NavigationItem>
                    </NavigationBar>
                    <hr />
                    <Content>
                        <Switch>
                            <Route path={`${match.path}`} exact component={RecentClasses}/>
                            <Route path={`${match.path}/weekly-goals`} exact component={WeeklyGoals}/>
                        </Switch>
                    </Content>
                </Router>
            </ClassDetails>
        </>
    )
}


export default HiredTutors
