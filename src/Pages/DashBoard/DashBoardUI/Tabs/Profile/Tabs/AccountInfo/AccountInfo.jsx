import React from 'react'
import {Heading,ImgSection,UploadImgButton,Img,UploadImg,Text,Details,Group,Label,Input,UpdateButton} from './AccountInfoStyles'
const AccountInfo = () => {
    return (
        <>
            <Heading>Account Settings</Heading>
            <ImgSection>
                <Img src='/images/ProfileImg.jpg' alt='ProfileImg'></Img>
                <UploadImg>
                <UploadImgButton>Upload Image</UploadImgButton>
                <Text>Maximum size - 1MB.</Text>
                <Text>JPG or PNG</Text>
                </UploadImg>
            </ImgSection>
            <Details>
                <Group className="mb-3">
                    <Label>First Name:</Label>
                    <Input type="text" placeholder="First Name"/>
                </Group>
                <Group className="mb-3">
                    <Label>Last Name:</Label>
                    <Input type="text" placeholder="Last Name"/>
                </Group>
                <Group className="mb-3">
                    <Label>Phone No.:</Label>
                    <Input type="tel" placeholder="Phone No."/>
                </Group>
                <Group className="mb-3">
                    <Label>Address:</Label>
                    <Input type='text' placeholder="Address" />
                </Group>
                <UpdateButton>Update</UpdateButton>
            </Details>
        </>
    )
}

export default AccountInfo
