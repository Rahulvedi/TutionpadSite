import React from 'react'
import { Button } from 'react-bootstrap';
import { Refer, ReferralForm,ReferImg, ReferralWorks,Paragraph,Title,SubTitle,ReferImageSection,LogoSpan,ReferWork,ArrowDiv} from './ReferralStyle'
import { FaShareAlt,FaVideo,FaTelegramPlane,FaRegMoneyBillAlt} from "react-icons/fa";
import ReferEarn from "../../Contact/ContactForm/Refer&Earn/Refer&Earn";
const Referral = () => {
    return (
        <>
        <Refer className="container">
            <ReferralForm> 
                <Paragraph>  
                    <ReferImageSection>
                        <ReferImg variant="top" src="/images/ReferForm.png"/>
                    </ReferImageSection>
                    <Title>Earn ₹1000 for each referral</Title>
                        Now, it pays to spread your love for Tuitionpad!
                    <SubTitle>
                        Apply Now
                    </SubTitle>
                </Paragraph>
                <ReferEarn/>
            </ReferralForm> 

            <ReferralWorks>
               <strong className="fs-3 py-1" style={{'color':'#1abc9c'}}>How it Works?</strong>
               <ArrowDiv></ArrowDiv>
                <ReferWork>
                    <LogoSpan> <FaShareAlt/> </LogoSpan>
                    <p className="py-2 m-2 w-75">
                        <b className="fs-5">Invite Friends</b><br/>
                        Apply now and start sharing link with your friends.
                    </p>
                </ReferWork> 
                <ReferWork> 
                    <LogoSpan> <FaVideo/> </LogoSpan> 
                    <p className="py-2 m-2 w-75">
                        <b className="fs-5">Your Friend Schedules a FREE Demo Class</b><br/>
                        Your referred friend schedules and attends a FREE Demo Class.
                    </p>
                </ReferWork> 
                <ReferWork> 
                    <LogoSpan> <FaTelegramPlane/> </LogoSpan> 
                    <p className="py-2 m-2 w-75">
                        <b className="fs-5">Your Friends Join Tuitionpad.You Win Cash Prize.</b><br/>
                        If your referred friend enrolls for a paid tuition plan, you get Rs. 1000 cash in your bank account or your current plan get discounted by Rs. 1000.
                    </p>
                </ReferWork> 
                <ReferWork>
                    <LogoSpan> <FaRegMoneyBillAlt/> </LogoSpan> 
                    <p className="py-2 m-2 w-75">
                        <b className="fs-5">Repeat Above Steps and Earn More Cash Rewards</b><br/>
                        Don't stop here, repeat this cycle and earn more cash rewards.
                    </p>
                </ReferWork> 
                <div className="container m-2 p-2 text-center">
                <Button style={{'backgroundColor':'#1abc9c'}}>Referral Links</Button>
                </div>
            </ReferralWorks>
        </Refer> 
        </>
    )
}

export default Referral
