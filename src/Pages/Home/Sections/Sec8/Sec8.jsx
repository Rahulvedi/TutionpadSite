import React, { useState } from 'react'
import { Section, Title, Content, Tabs, Tab,Button } from './Sec8Style'
import Generic from './Accordion/Generic';
import ClassRelated from './Accordion/ClassRelated'
import PaymentRelated from './Accordion/PaymentRelated'

const RenderSwitch = ({ choice }) => {
    switch (choice) {
        case 0:
            return <Generic/>;
        case 1:
            return <ClassRelated/>;
        case 2:
            return <PaymentRelated/>;
        default:
            return <Generic/>;
    }
}
const Sec8 = () => {
    const [Choice, setChoice] = useState(0)
    return (
        <Section>
            <Title>Your most asked queries are answered by our experts</Title>
            <Content>
                <Tabs>
                    <Tab onClick={() => setChoice(0)} className={(Choice === 0) ? 'active' : ''}>Generic</Tab>
                    <Tab onClick={() => setChoice(1)} className={(Choice === 1) ? 'active' : ''}>Class Related</Tab>
                    <Tab onClick={() => setChoice(2)} className={(Choice === 2) ? 'active' : ''}>Payment related</Tab>
                </Tabs>
                <RenderSwitch choice={Choice} className='render-switch' />
            </Content>
            <Button>Book Trial Classes</Button>
        </Section>
    )
}

export default Sec8
