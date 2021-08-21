import React from 'react'
import { Header } from '../../Components/default'
import Referral from './Referral/Referral'
// import Queries_TermsAndCondition from './Queries_TermsAndCondition/Queries_TermsAndCondition'
import { Footer } from '../../Components/default'
const ReferAndEarn = () => {
    return (
        <>
          <Header/>  
          <Referral/>
          {/* <ReferresImg variant="top" src="/Referral/referal-image.png" /> */}
          {/* <Queries_TermsAndCondition/> */}
          <Footer />
        </>
    )
}

export default ReferAndEarn
