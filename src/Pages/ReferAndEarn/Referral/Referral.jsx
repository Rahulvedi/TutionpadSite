import React from 'react'
import { Refer, ReferralForm,ReferImg, ReferralWorks,Paragraph,Title,SubTitle,ReferImageSection} from './ReferralStyle'
import ReferEarn from "../../Contact/ContactForm/Refer&Earn/Refer&Earn";
const Referral = () => {
    return (
        <>
         <Refer className="container">
             <ReferralForm> 
                <Paragraph>
                <ReferImageSection>
                    <ReferImg variant="top" src="https://mllwbi0cftpe.i.optimole.com/4e0vck0.Pdwa~4f6f8/w:auto/h:auto/q:90/https://tuitionpad.com/wp-content/uploads/2020/08/refer11.png"/>
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
               invite works 
            </ReferralWorks>
        </Refer> 
        </>
    )
}

export default Referral
