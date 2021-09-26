import React from 'react';
import { TopBar, Left, Right,Message, JoinNow, ClassDetails, NavigationBar, NavigationItem, Content,Item } from '../Classes/HiredTutors/HiredTutorsStyle';
import { BiMessageDetail } from 'react-icons/bi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PreviousDisputes from './Tabs/PreviousDisputes/PreviousDisputes.jsx'
import DisputeRules from './Tabs/DisputeRules/DisputeRules'
import CreateDisputes from './Tabs/CreateDispute/CreateDispute'
const Disputes = ({ match }) => {

    return (
        <> 
        <section className="p-5">
            <TopBar style={{background:"#6BFCF3CC"}}>
                <Left>
                <Item>Faced any issue during your recent class?</Item>
                </Left>
                <Right>
                    <JoinNow style={{borderRadius: "5px",margin:"0 1rem",padding:".7rem .9rem"}}>Create a dispute</JoinNow>
                    <Message><BiMessageDetail className="fs-3"/>Message</Message>
                </Right>
            </TopBar>
            <ClassDetails>
                <Router>
                    <NavigationBar>
                        <NavigationItem to={`${match.path}`}>Previous Disputes </NavigationItem>
                        <NavigationItem to={`${match.path}/create-disputes`}>Create a Disputes</NavigationItem>
                        <NavigationItem to={`${match.path}/dispute-rules`}>Dispute Rules</NavigationItem>
                    </NavigationBar>
                    <hr />
                    <Content>
                        <Switch>
                            <Route path={`${match.path}`} exact component={PreviousDisputes }/>
                            <Route path={`${match.path}/create-disputes`} exact component={CreateDisputes}/>
                            <Route path={`${match.path}/dispute-rules`} exact component={DisputeRules}/>
                        </Switch>
                    </Content>
                </Router>
            </ClassDetails>
            </section>
        </>
    )
}


export default Disputes
