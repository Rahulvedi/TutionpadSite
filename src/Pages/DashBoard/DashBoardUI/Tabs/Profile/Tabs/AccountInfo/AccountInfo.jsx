import React,{useRef} from 'react'
// import axios from 'axios'
import { Student } from '../../../../../../../Context/StudentContext'
import {Heading,ImgSection,UploadImgButton,Img,UploadImg,Text,Details,Group,Label,Input,UpdateButton} from './AccountInfoStyles'
const AccountInfo = () => {
    const {currentUser ,baseURL}=Student();
    const userNameRef = useRef()
    const PhoneNoRef = useRef()
    const CityRef = useRef()
    const CountryRef = useRef()
    // const ImgRef = useRef()
    console.log(currentUser)
    // const [newUser, setNewUser] = useState({
    //     username:currentUser.username,
    //     phoneNumber:currentUser.phoneNo,
    //     email:currentUser.email,
    //     country:currentUser.country,
    //     city:currentUser.city,
    //     img:currentUser.image
    // })
    
     const handleUpdate=async(event)=>{
        event.preventDefault()
        const payload = {
            userName: userNameRef.current.value,
            phoneNumber: PhoneNoRef.current.value,
            city: CityRef.current.value,
            country: CountryRef.current.value,
            image:currentUser.image
        }
        // try{
        //     await axios.post('http://localhost:3001/students/update',newUser)
        // }catch(error){

        // }
        console.log(payload)
    }
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
                    <Label htmlFor='firstname'>User Name:</Label>
                    <Input id='firstname' type="text" placeholder={currentUser.username} ref={userNameRef} value={currentUser.userName} />
                </Group>
                {/* <Group className="mb-3">
                    <Label htmlFor='lastname'>Last Name:</Label>
                    <Input id='lastname'type="text" placeholder="Last Name"/>
                </Group> */}
                <Group className="mb-3">
                    <Label htmlFor='phoneno.'>Phone No.:</Label>
                    <Input id='phoneno.'type="tel" placeholder={currentUser.phoneNo} ref={PhoneNoRef} value={currentUser.phoneNo}/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='address'>Country:</Label>
                    <Input id='address' type='text' placeholder={currentUser.country} ref={CountryRef} value={currentUser.country}/>
                </Group>
                <Group className="mb-3">
                    <Label htmlFor='address'>City:</Label>
                    <Input id='address' type='text' placeholder={currentUser.city} ref={CityRef} value={currentUser.city}/>
                </Group>
                <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
            </Details>
        </>
    )
}

export default AccountInfo
