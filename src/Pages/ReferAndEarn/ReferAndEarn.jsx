import React from 'react'
import { Header } from '../../Components/default'
import {ReferImageSection,ReferImage} from './Referral/ReferralStyle'
import Referral from './Referral/Referral'
import QueriesTermsCondition from './Queries_TermsAndCondition/Queries_TermsAndCondition'
import { Footer } from '../../Components/default'
const ReferAndEarn = () => {
    return (
        <>
          <Header/>  
          <Referral/>
          <ReferImageSection>
            <ReferImage src="https://mllwbi0cftpe.i.optimole.com/4e0vck0.Pdwa~4f6f8/w:auto/h:auto/q:90/https://tuitionpad.com/wp-content/uploads/2020/09/referal-image21.png"/>
          </ReferImageSection>
          <QueriesTermsCondition/>
          <Footer />
        </>
    )
}

export default ReferAndEarn
