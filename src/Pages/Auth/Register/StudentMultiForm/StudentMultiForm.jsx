import React from 'react'
import {  useStep } from 'react-hooks-helper'
import ContactInfo from './StepForm/ContactInfo/Contactnfo'
import OTPinfo from './StepForm/OTP/OTPinfo'
import PersonalInfo from './StepForm/PersonalInfo/PersonalInfo'
const steps = [
    { id: 'contactInfo' },
    { id: 'OTP' },
    { id: 'PersonalInfo' }
]
const StudentMultiForm = () => {
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    const props={navigation}
    switch (step.id) {
        case 'contactInfo': return <ContactInfo {...props}/>;
        case 'OTP': return <OTPinfo {...props}/>;
        case 'PersonalInfo': return <PersonalInfo {...props}/>;
        default : return <ContactInfo/>
    }
}

export default StudentMultiForm
