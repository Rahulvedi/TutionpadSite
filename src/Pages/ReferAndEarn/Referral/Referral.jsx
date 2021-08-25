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
               invite works 
            </ReferralWorks>
        </Refer> 
        </>
    )
}

export default Referral
