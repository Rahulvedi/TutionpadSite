import React from 'react'
import { Section, FlotingWrapper, Float,ImgSlider } from './Sec1Styles'
import { Slider } from '../../../../Components/default'

const Sec1 = () => {
    return (
        <Section>
            <Slider />
            <FlotingWrapper>
                <Float>
                    <h1>Content to display Here...</h1>
                </Float>
            </FlotingWrapper>
            <ImgSlider>
                
            </ImgSlider>
        </Section>
                    )
}

  export default Sec1
