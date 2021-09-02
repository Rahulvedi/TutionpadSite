import React from 'react'
import { Details, Group, Heading, Img, ImgSection, Input, Label, UpdateButton } from './EmailStyles'
const EmailSettings = () => {
    return (
        <>   
      <Heading>Email Settings</Heading>
      <hr/>
      <ImgSection>
        <Img src='/images/ProfileImgs/Email.svg' alt='ProfileImg'></Img>
      </ImgSection>
      <Details>
                <Group className="mb-3">
                    <Label htmlFor='email'>Email:</Label>
                    <Input id='email' type="email" placeholder="xyz@gmail.com"/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='newemail'>New Email:</Label>
                    <Input id='newemail'type="email" placeholder="xyz@gmail.com"/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='code'>Verification Code:</Label>
                    <Input id='code' type="number" placeholder="Code"/>
                </Group>
                <UpdateButton>Update</UpdateButton>
            </Details>
        </>
    )
}

export default EmailSettings
