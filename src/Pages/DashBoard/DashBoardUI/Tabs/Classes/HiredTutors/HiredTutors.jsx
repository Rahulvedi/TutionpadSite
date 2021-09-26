import React,{useState,useEffect} from 'react';
import { TopBar, Left, Right, AlarmButton, Time,Message, JoinNow, TutorInfo, ProfileImg, Name, ClassDetails, NavigationBar, NavigationItem, Content } from './HiredTutorsStyle';
import { IoMdAlarm } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecentClasses from './Tabs/RecentClasses/RecentClasses.jsx'
import WeeklyGoals from './Tabs/WeeklyGoals/WeeklyGoals';
import MyTutors from './Tabs/MyTutors/MyTutors';
import ClassesSchedule from './Tabs/ClassesSchedule/ClassesSchedule';
const HiredTutors = ({ match }) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
     let TimeId = setInterval(() => setTime(new Date()), 1000);
     return () => {
      clearInterval(TimeId);
     };
     });

    return (
        <>
            <TopBar>
                <Left>
                    <AlarmButton><IoMdAlarm style={{ fontSize: '1.5rem' }} />Upcoming Class</AlarmButton>
                    <Time>{ time.toString()}</Time>
                </Left>
                <Right>
                    <Message><BiMessageDetail className="fs-3" />Message</Message>
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
                            <Route path={`${match.path}/my-tutors`} exact component={MyTutors}/>
                            <Route path={`${match.path}/classes-schedule`} exact component={ClassesSchedule}/>
                        </Switch>
                    </Content>
                </Router>
            </ClassDetails>
        </>
    )
}


export default HiredTutors
