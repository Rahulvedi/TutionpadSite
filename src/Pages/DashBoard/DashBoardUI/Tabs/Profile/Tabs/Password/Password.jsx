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
                      <Label htmlFor='newpassword'>New Password:</Label>
                      <Input id='newpassword' type="password" />
                  </Group>
                  <Group className="mb-3">
                      <Label htmlFor='confirmpassword'>Confirm Password:</Label>
                      <Input id='confirmpassword' type="password" />
                  </Group>
                  <Group className="mb-3">
                      <Label htmlFor='code'>Verification Code:</Label>
                      <Input id='code' type="number"/>
                  </Group>
                  <UpdateButton>Update</UpdateButton>
              </Details>
          </>
    )
}

export default Password
