import React from 'react'
import {ChatPortion,ChatingSection,TutorChatDeatails,Header,Chat,MessgeFooter,Date,Left,Right,Time,Tutor,ProfileImg,Name,Heading,SubHeading,Prices,Price,Details,Select,Arrow,Plus,Button} from './ChatSectionStyles'
import {FormControl,InputGroup} from 'react-bootstrap'
import {AiOutlineSend,AiFillStar,AiFillCheckCircle} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

const ChatSection = () => {
    return (
        <>
            <ChatPortion>
                <ChatingSection>
                    <Header>
                    Tutor Name
                    </Header>
                    <Chat>
                        <Date>15/10/2021</Date>
                            <Left>
                                left Message TutorSide
                                <Time> 08:42 PM</Time>
                            </Left>
                            <div className="d-flex justify-content-end">
                                <Right>
                                    Right Message ClientSide
                                    <Time> 09:15 PM</Time>
                                </Right>
                            </div>    
                            <Left>
                                TutorSide
                                <Time> 08:42 AM</Time>
                            </Left>
                            <div className="d-flex justify-content-end">
                                <Right>
                                    ClientSide
                                    <Time> 09:15 AM</Time>
                                </Right>
                            </div>    
                    </Chat>
                    <MessgeFooter>
                        <InputGroup className="mx-2" style={{background: "#b2d9eb",bordeRadius: "19px"}}>
                            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                        </InputGroup>

                        <AiOutlineSend style={{color:"#007770", fontSize:"2rem",cursor: "pointer"}}/>
                    </MessgeFooter>
                </ChatingSection>
                <TutorChatDeatails>
                    <Tutor>
                        <ProfileImg src="/images/ProfileImg.jpg"/>
                        <Name>
                             <Heading>Tutor Name<AiFillCheckCircle style={{color:"#1547FA" ,margin:"0 .4rem"}}/></Heading>
                            <SubHeading>5 <AiFillStar style={{color:"#007770" ,margin:"0 .1rem"}}/> (12 Reviews)</SubHeading>

                        </Name>
                      
                            <Prices>
                                <Price><BiRupee style={{fontSize:"1.4rem"}}/>1000</Price>
                                <SubHeading>Per Hour</SubHeading>
                            </Prices>                  
                    </Tutor>
                    <Details>
                        <SubHeading><Arrow/> IIT JEE, NEET Physics</SubHeading>
                        <SubHeading><Arrow/> Sikar, Rajasthan</SubHeading>
                        <SubHeading><Arrow/> 85 Active students</SubHeading>
                        <SubHeading><Arrow/> 150 Classes Online</SubHeading>
                        <SubHeading><Arrow/> Home Tuition</SubHeading>
                        <SubHeading><Arrow/> Vaccinated II </SubHeading>
                    </Details>
                    <Select>
                        Select your covienent time<Plus/>
                    </Select>
                    <Select>
                        Make a payment<Plus/>
                    </Select>
                    <Select>
                        Attend session<Plus/>
                    </Select>
                   <Button>Book Demo Class</Button>
                </TutorChatDeatails>
            </ChatPortion>
        </>
    )
}

export default ChatSection
