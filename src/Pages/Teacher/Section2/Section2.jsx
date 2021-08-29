import React from 'react'
import {Container,Button} from 'react-bootstrap'
import {FaLaptop,FaWifi,FaPencilAlt,FaHeadphones} from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
import {Sec3,Cards,Card2,Div2,Card3,Div3,Info} from '../TeacherStyle'
const Section2 = () => {
    return (
        <>
        <Sec3>
            <Container>
                <h1>What Do You Need To Teach Online?</h1>
                <Cards>
                    <Card2>
                        <Div2>Passion for Teaching</Div2>
                        Teaching K-12 students is fun, at the same time it is challenging too. Teachers need to actively involve students for 45 minutes to 1 hour. Here your passion for teaching is much needed.
                    </Card2>
                    <Card2>
                        <Div2>Love for Technology</Div2>
                        Technology has made it possible to touch and impact millions of students' life from the comfort of your home. Sometimes you may face little challenges related to the browser, internet connection and device setup.
                    </Card2>
                   
                </Cards>
            </Container>
            <Container>
                <h3 className="text-start py-2 ">Tools/Devices Requirements</h3>
                <div className=" my-4 pb-2" style={{'background':'#ffffff'}}>
                    <Cards>
                        <Card3>
                        <FaLaptop style={{'fontSize':'2.5rem','color':'#f8596a'}}/>
                            <Div3>Laptop/Desktop</Div3>
                            Laptop or Desktop with webcam and sufficient configuration required.
                        </Card3>
                        <Card3>
                            <FaWifi style={{'fontSize':'2.5rem','color':'#f8596a'}}/>
                            <Div2>High-Speed Internet</Div2>
                            You need a minimum of 5 MBPS speed, 1 GB of Internet data for a class of 1 hour.
                        </Card3>-
                        <Card3>
                            <FaPencilAlt style={{'fontSize':'2.5rem','color':'#f8596a'}}/>
                            <Div2>Digital Pen Tablet</Div2>
                            You need a good quality digital pen tablet for easy writing/ drawing on a digital whiteboard.
                        </Card3> 
                        <Card3>
                            <FaHeadphones style={{'fontSize':'2.5rem','color':'#f8596a'}}/>
                            <Div2>Headphone with Mic</Div2>
                            For a clear voice and audio, you need good quality Headphone with Mic.
                        </Card3> 
                    </Cards>
                    <Info><HiInformationCircle style={{'fontSize':'2.5rem','color':'#f8596a', 'padding':'.1rem .3rem'}}/>Do you need the best suggestions for the above devices? Find here the devices used by our tutors.</Info>
                </div>
                <Button variant="danger"> APPLY NOW</Button>
            </Container>
        </Sec3>
            
        </>
    )
}

export default Section2
