import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AccountInfo, CalenderSettings, ClassConfirmation, Notifications, PaymentHistory, PaymentSetting, } from './Tabs/default'
import { Container, CoverImg, Info, ProfileImg, Name, Edit, Settings, Tabs, Content, Tab, Options } from './ProfileStyles'
const Profile = ({ match }) => {
    console.log(match)
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
                    <Tabs>
                        <Tab><Options to={`${match.path}`}>Account Information</Options></Tab>
                        <Tab><Options to={`${match.path}/payment-setting`}>Payment Settings</Options></Tab>
                        <Tab><Options to={`${match.path}/payment-history`}>My Payment History</Options></Tab>
                        <Tab><Options to={`${match.path}/class-confirmation-setting`}>Class Confirmation Settings</Options></Tab>
                        <Tab><Options to={`${match.path}/calender-setting`}>Calender Settings</Options></Tab>
                        <Tab><Options to={`${match.path}/notification`}>Notification</Options></Tab>
                    </Tabs>
                    <Content>
                        <Switch>
                            <Route path={`${match.path}`} exact component={AccountInfo} />
                            <Route path={`${match.path}/payment-setting`} component={PaymentSetting} />
                            <Route path={`${match.path}/payment-history`} component={PaymentHistory} />
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
