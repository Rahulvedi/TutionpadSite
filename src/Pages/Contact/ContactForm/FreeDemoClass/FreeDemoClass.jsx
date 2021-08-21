import React from 'react'
import {  useStep } from 'react-hooks-helper'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'
const steps = [
    { id: 'Step1' },
    { id: 'Step2' },
    { id: 'Step3' }
]
const FreeDemoClass = () => {
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    const props={navigation}
    switch (step.id) {
        case 'Step1': return <Step1 {...props}/>;
        case 'Step2': return <Step1 {...props}/>;
        case 'Step3': return <Step1 {...props}/>;
        default : return <Step1/>
    }
}

export default FreeDemoClass
