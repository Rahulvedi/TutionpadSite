import React from 'react'
import { Details, Group, Heading, Img, ImgSection, Input, Label, UpdateButton } from './PasswordStyles'
const Password = () => {
    return (
        <>
        <Heading>Change Password</Heading>
        <ImgSection>
          <Img src='/images/ProfileImgs/Password.svg' alt='ProfileImg'></Img>
        </ImgSection>
        <Details>
                  <Group className="mb-3">
                      <Label>New Password:</Label>
                      <Input type="password" />
                  </Group>
                  <Group className="mb-3">
                      <Label>Confirm Password:</Label>
                      <Input type="password" />
                  </Group>
                  <Group className="mb-3">
                      <Label>Verification Code:</Label>
                      <Input type="number"/>
                  </Group>
                  <UpdateButton>Update</UpdateButton>
              </Details>
          </>
    )
}

export default Password
