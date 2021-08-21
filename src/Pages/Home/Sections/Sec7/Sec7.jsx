import React from 'react'
import { Section, Title, Content, Card, Icon, Text, SubText,Button } from './Sec7Styles'
import { BsCameraVideo } from 'react-icons/bs'
import { GoRepo } from 'react-icons/go'
import { FaRegSmileBeam } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { AiOutlineHighlight } from 'react-icons/ai'
import {BiCalendarWeek} from 'react-icons/bi'
const Sec7 = () => {
    return (
        <Section>
            <Title>Experience the Best
                @ Tuitionpad.com </Title>
            <Content>
                <Card>
                    <Icon><GoRepo /></Icon>
                    <Text>Ask Unlimited Doubts</Text>
                    <SubText>Don't sit calm until you get clear concepts. You can always raise hand to ask your doubts.</SubText>
                </Card>
                <Card>
                    <Icon><BiCalendarWeek/></Icon>
                    <Text>Weekly Reports</Text>
                    <SubText>Outcome based methodology, we share your child's learning evaluation reports every week..</SubText>
                </Card>
                <Card>
                    <Icon><BsCameraVideo /></Icon>
                    <Text>Revise Your Live Class</Text>
                    <SubText>Revise your real face to face class whenever you do subject revision.</SubText>
                </Card>
                <Card>
                    <Icon><FaRegSmileBeam /></Icon>
                    <Text>Support Manager</Text>
                    <SubText>Dedicated student support manager for parents for care, guide and best experience</SubText>
                </Card>
                <Card>
                    <Icon><HiUsers /></Icon>
                    <Text>Face to face Live Class</Text>
                    <SubText>Real-time interaction,
                        5 times more engagement than video courses</SubText>
                </Card>
                <Card>
                    <Icon><AiOutlineHighlight /></Icon>
                    <Text> Practice Test</Text>
                    <SubText>Regular practice tests to evaluate subjects and for better exam preparation</SubText>
                </Card>
            </Content>
            <Button>Book Trial Classes</Button>
        </Section>
    )
}
export default Sec7
