import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoardHeader from '../DashBoardUI/DashboardHeader/DashBoardHeader'
import SubDashBoardHeader from '../DashBoardUI/SubDashBoardHeader/SubDashBoardHeader'
import { Content } from './StudentDashBoardStyle'
import Error404 from '../../Error404/Error404'
import StudentProvider from '../../../Context/StudentContext'
import { Profile, Classes, Messages, Report, Disputes, Favourites, Orders, Requirments } from '../DashBoardUI/Tabs/default'
const StudentDashBoard = ({ match }) => {
    return (
        <Router>
            <StudentProvider>
                <DashBoardHeader match={match} />
                <SubDashBoardHeader match={match} />
                <Content>
                    <Switch>
                        <Route path={`${match.path}`} exact component={Classes} />
                        <Route path={`${match.path}/profile`} component={Profile} />
                        <Route path={`${match.path}/messages`} component={Messages} />
                        <Route path={`${match.path}/report`} component={Report} />
                        <Route path={`${match.path}/disputes`} component={Disputes} />
                        <Route path={`${match.path}/favourites`} component={Favourites} />
                        {/* <Route path={`${match.path}/payment`} component={Payment} /> */}
                        <Route path={`${match.path}/orders`} component={Orders} />
                        <Route path={`${match.path}/requirements`} component={Requirments} />
                        <Route component={Error404} />
                    </Switch>
                </Content>

            </StudentProvider>
        </Router>
    )
}

export default StudentDashBoard
