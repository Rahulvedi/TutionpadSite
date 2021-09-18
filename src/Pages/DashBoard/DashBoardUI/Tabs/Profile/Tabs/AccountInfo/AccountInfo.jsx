import React,{useState} from 'react'
import { Student } from '../../../../../../../Context/StudentContext'
import {Heading,ImgSection,UploadImgButton,Img,UploadImg,Text,Details,Group,Label,Input,UpdateButton} from './AccountInfoStyles'
const AccountInfo = () => {
    const {currentUser ,baseURL}=Student();
    const [CurrentUser, setCurrentUser] = useState(currentUser)
    return (
        <>
            <Heading>Account Settings</Heading>
            <hr/>
            <ImgSection>
                <Img src={(CurrentUser===undefined)?`${baseURL}ProfilePicture/ProfileImg-Male.jpg`:(baseURL+CurrentUser.image)}  alt='ProfileImg'></Img>
                <UploadImg>
                <UploadImgButton>Upload Image</UploadImgButton>
                <Text>Maximum size - 1MB.</Text>
                <Text>JPG or PNG</Text>
                </UploadImg>
            </ImgSection>
            <Details>
                <Group className="mb-3">
                    <Label htmlFor='firstname'>First Name:</Label>
                    <Input id='firstname' type="text" placeholder="First Name"/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='lastname'>Last Name:</Label>
                    <Input id='lastname'type="text" placeholder="Last Name"/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='phoneno.'>Phone No.:</Label>
                    <Input id='phoneno.'type="tel" placeholder="Phone No."/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='address'>Address:</Label>
                    <Input id='address' type='text' placeholder="Address" />
                </Group>
                <UpdateButton>Update</UpdateButton>
            </Details>
        </>
    )
}

export default AccountInfo
