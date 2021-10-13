import React from 'react';
import {Container, TopBar,ClassDetails, NavigationBar, NavigationItem, Content ,Boxes,Box,Area,H2,H3} from './OrdersStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyOrders from './Tabs/MyOrders/MyOrders'
import AddPayment from './Tabs/AddPayment/AddPayment'
import PaymentHistory from './Tabs/PaymentHistory/PaymentHistory'
import {BiWallet} from 'react-icons/bi'
import {RiCurrencyLine} from 'react-icons/ri'
import {CgNotes} from 'react-icons/cg'
const Orders = ({match}) => {

    return (
        <>
        <Container>
            <TopBar>
                <Boxes>
                    <Box><BiWallet style={{fontSize:"3rem"}}/></Box>
                    <Area>
                        <H3>AVAILABLE BALANCE</H3>
                        <H2>INR <b className="fs-4 my-1">15000</b></H2>
                    </Area>
                </Boxes>
                <Boxes>
                    <Box><RiCurrencyLine style={{fontSize:"3rem"}}/></Box>
                    <Area>
                        <H3>BALANCE USED</H3>
                        <H2>INR <b className="fs-4 my-1">12000</b></H2>
                    </Area>
                </Boxes>
                <Boxes>
                    <Box><CgNotes style={{fontSize:"3rem"}}/></Box>
                    <Area>
                        <H3>PAID CLASSES</H3>
                        <H2><b className="fs-4 my-1">96</b> CLASSES</H2>
                    </Area>
                </Boxes>  
            </TopBar>
            <ClassDetails>
                <Router>
                    <NavigationBar>
                        <NavigationItem to={`${match.path}`}>My Orders</NavigationItem>
                        <NavigationItem to={`${match.path}/payment-history`}>Payment History</NavigationItem>
                        <NavigationItem to={`${match.path}/add-payment`}>Add Payment</NavigationItem>
                    </NavigationBar>
                    <hr />
                    <Content>
                        <Switch>
                            <Route path={`${match.path}`} exact component={MyOrders}/>
                            <Route path={`${match.path}/payment-history`} exact component={PaymentHistory}/>
                            <Route path={`${match.path}/add-payment`} exact component={AddPayment}/>
                        </Switch>
                    </Content>
                </Router>
            </ClassDetails>
        </Container>
        </>
    )
}


export default Orders
