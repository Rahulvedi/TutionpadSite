import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp,FaRegEnvelope,FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { Section,Links,Icon,Title,SubTitle} from './SocialStyle'


const Social = () => {
    return (
        <Section>
            <Links target='_blank' href='https://api.whatsapp.com/send?phone=+917976649684'>
            <Icon><FaWhatsapp/></Icon>
            <Title>+91 7976649684</Title>
            </Links> 
            <Links as={Link} to='mailto:hello@tuitionpad.com?body="Hello !"&subject="Tuition"'>
            <Icon><FaRegEnvelope/></Icon>
            <Title>hello@tuitionpad.com</Title>
            </Links> 
            <Links  target='_blank' href='https://twitter.com/Tuitionpad1'>
            <Icon><FaTwitter/></Icon>
            <Title>Twitter</Title>
            </Links> 
            <Links  target='_blank' href='https://www.facebook.com/tuitonpad'>
            <Icon><FaFacebookF/></Icon>
            <Title>Facebook</Title>
            </Links> 
            <Links target='_blank' href='https://www.linkedin.com/company/tuitionpad/'>
            <Icon><FaLinkedinIn/></Icon>
            <Title>Linkedin</Title>
            </Links> 
            <Links target='_blank' href='https://www.youtube.com/channel/UCbt6rdg5iHql2q-rG1I7fmA'> 
            <Icon><FaYoutube/></Icon>
            <Title>YouTube</Title>
            </Links> 
            <Links as={Link} to='/signup-as-student'>  
            <Icon><FaInstagram/></Icon>
            <Title>Instagram</Title>
            </Links> 
            <SubTitle>Or you can catch us in live chat for instant reply.</SubTitle>
        </Section>
    )
}

export default Social
