import React,{useState} from 'react'
import axios from 'axios'
import { Student } from '../../../../../../../Context/StudentContext'
import {Heading,ImgSection,UploadImgButton,Img,UploadImg,Text,Details,Group,Label,Input,UpdateButton} from './AccountInfoStyles'
const AccountInfo = () => {
    const {currentUser ,baseURL}=Student();
    console.log(currentUser)
    const [newUser, setNewUser] = useState({
        firstName:currentUser.usernam,
        lastName:currentUser.username,
        phoneNo:currentUser.phoneNo,
        email:currentUser.email,
        country:currentUser.country,
        city:currentUser.city,
        DOB:currentUser.DOB
    })
    
     const handleUpdate=async(event)=>{
        // try{
        //     await axios.post('http://localhost:3001/students/update',newUser)
        // }catch(error){

        // }
        event.preventDefault();
        console.log(newUser)
    }
    console.log(newUser)
    return (
        <>
            <Heading>Account Settings</Heading>
            <hr/>
            <ImgSection>
                <Img  src={(currentUser.image===undefined)?'/images/ProfileImg.jpg':`${baseURL}${currentUser.image}`} alt="ProfileImg"   ></Img>
                <UploadImg>
                <UploadImgButton>Upload Image</UploadImgButton>
                <Text>Maximum size - 1MB.</Text>
                <Text>JPG or PNG</Text>
                </UploadImg>
            </ImgSection>
            <Details>
                <Group className="mb-3">
                    <Label htmlFor='firstname'>First Name:</Label>
                    <Input id='firstname' type="text" placeholder="First Name" onChange={(event)=>{
                        setNewUser({
                            username:event.target.value
                        })
                    }}/>
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
                <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
            </Details>
        </>
    )
}

export default AccountInfo
