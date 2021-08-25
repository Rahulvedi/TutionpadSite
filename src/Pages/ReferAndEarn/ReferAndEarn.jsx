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
            <ReferImage src="/images/referal-image.png"/>
          </ReferImageSection>
          <QueriesTermsCondition/>
          <Footer />
        </>
    )
}

export default ReferAndEarn
