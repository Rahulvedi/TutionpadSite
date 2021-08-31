import React from 'react'
import { Details, Group, Heading, Img, ImgSection, Input, Label, UpdateButton } from './EmailStyles'
const EmailSettings = () => {
    return (
        <>   
      <Heading>Email Settings</Heading>
      <ImgSection>
        <Img src='/images/ProfileImgs/Email.svg' alt='ProfileImg'></Img>
      </ImgSection>
      <Details>
                <Group className="mb-3">
                    <Label>Email:</Label>
                    <Input type="email" placeholder="xyz@gmail.com"/>
                </Group>
                <Group className="mb-3">
                    <Label>New Email:</Label>
                    <Input type="email" placeholder="xyz@gmail.com"/>
                </Group>
                <Group className="mb-3">
                    <Label>Verification Code:</Label>
                    <Input type="number" placeholder="Code"/>
                </Group>
                <UpdateButton>Update</UpdateButton>
            </Details>
        </>
    )
}

export default EmailSettings
