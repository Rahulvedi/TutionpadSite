import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AccountInfo, CalenderSettings, ClassConfirmation, Email, Notifications,Password } from './Tabs/default'
import {ScrollToTop} from '../../../../../Components/default'
import { Container, CoverImg, Info, ProfileImg, Name, Edit, Settings, Tabs, Content, Tab, Options } from './ProfileStyles'
const Profile = ({ match }) => {
    return (
        <Container>
            <CoverImg src='/images/BannerImg.jpeg' />
            <Info>
                <ProfileImg src='/images/ProfileImg.jpg' alt='ProfileImg' />
                <Name>Student Name</Name>
                <Edit />
            </Info>
            <Settings>
                <Router>
                    
                    <ScrollToTop/>
                    <Tabs>
                        <Tab><Options to={`${match.path}`}>Account Information</Options></Tab>
                        <Tab><Options to={`${match.path}/email`}>Email</Options></Tab>
                        <Tab><Options to={`${match.path}/password`}>Password</Options></Tab>
                        <Tab><Options to={`${match.path}/class-confirmation-setting`}>Class Confirmation Settings</Options></Tab>
                        <Tab><Options to={`${match.path}/calender-setting`}>Calender Settings</Options></Tab>
                        <Tab><Options to={`${match.path}/notification`}>Notification</Options></Tab>
                    </Tabs>
                    <Content>
                        <Switch>
                            <Route path={`${match.path}`} exact component={AccountInfo} />
                            <Route path={`${match.path}/email`} component={Email} />
                            <Route path={`${match.path}/password`} component={Password} />
                            <Route path={`${match.path}/class-confirmation-setting`} component={ClassConfirmation} />
                            <Route path={`${match.path}/calender-setting`} component={CalenderSettings} />
                            <Route path={`${match.path}/notification`} component={Notifications} />
                        </Switch>
                    </Content>
                </Router>
            </Settings>
        </Container>
    )
}

export default Profile
