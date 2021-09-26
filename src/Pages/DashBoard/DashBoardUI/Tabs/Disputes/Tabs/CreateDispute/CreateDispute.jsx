import React from 'react'
import { Section,Title,Topic,Button} from '../PreviousDisputes/More/MoreStyles'
import {Form} from 'react-bootstrap'
import styled from 'styled-components'
const CreateDispute = () => {
    const Container=styled.div`
    display: flex;
    margin:1rem 1.5rem;
    `
    return (
        <>
            <Section>
                <Title>Select from eligible classes for dispute</Title>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Tutor Name</Topic>
                    <Topic>Physics</Topic>
                    <Topic>26 November</Topic>
                    <Topic>24 hours ago</Topic>
                </Container>
          
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Tutor Name</Topic>
                    <Topic>Physics</Topic>
                    <Topic>26 November</Topic>
                    <Topic>24 hours ago</Topic>
                </Container>
        
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Tutor Name</Topic>
                    <Topic>Physics</Topic>
                    <Topic>26 November</Topic>
                    <Topic>24 hours ago</Topic>
                </Container>
            </Section>

            <Section>
                <Title>How you think your class was not fine-</Title>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher has denied to discuss doubts.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher misbehaved with me during this class.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher used abusive words during this class.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher was unable to explain the topic.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher joined class late.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher joined class late.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Teacher quited class before time.</Topic>
                </Container>
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>Other</Topic>
                </Container>
            </Section>
            <Section>
                <Title>Explaination</Title>
                <Form.Control as="textarea" rows={5} style={{margin:"1rem",background: "#F0FFFECC",width:"50%",borderRadius:"5px"}} />
                <Container>
                    <Form.Check type="radio"/>
                    <Topic>I have reviewed and agree to Tuitionpad’s Dispute Rules.</Topic>
                </Container>
                <Button>SUBMIT</Button>
            </Section>  
        </>
    )
}

export default CreateDispute
