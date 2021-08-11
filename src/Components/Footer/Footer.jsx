import React from 'react'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
    return (
      <footer>
        <Box>
      <h1 style={{ color: "green", 
                   textAlign: "left", 
                   marginTop: "-50px" }}>
        TuitionPad
      </h1>
      <br></br>
      
      <Container>
        <Row>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Book Free Demo Class</FooterLink>
            <FooterLink href="#">Refer and Earn</FooterLink>
            <FooterLink href="#">Become a Teacher</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
          </Column>
          <Column>
            <Heading>Live Tuition Classes</Heading>
            <FooterLink href="#">Class 8 Maths</FooterLink>
            <FooterLink href="#">Class 8 Science</FooterLink>
            <FooterLink href="#">Class 8 English</FooterLink>
            <FooterLink href="#">Class 9 Maths</FooterLink>
            <FooterLink href="#">Class 9 English</FooterLink>
            <FooterLink href="#">Class 9 Science</FooterLink>
          </Column>
          <Column>
            <Heading>Live Tuition Classes</Heading>
            <FooterLink href="#">Class 10 Maths</FooterLink>
            <FooterLink href="#">Class 10 Science</FooterLink>
            <FooterLink href="#">Class 10 English</FooterLink>
            <FooterLink href="#">Class 11 Physics</FooterLink>
            <FooterLink href="#">Class 11 Chemistry</FooterLink>
            <FooterLink href="#">Class 11 Maths</FooterLink>
            <FooterLink href="#">Class 11 Zoology</FooterLink>
            <FooterLink href="#">Class 11 Botany</FooterLink>
          </Column>
          <Column>
            <Heading>Live Tuition Classes</Heading>
            <FooterLink href="#">Class 12 Physics</FooterLink>
            <FooterLink href="#">Class 12 Chemistry</FooterLink>
            <FooterLink href="#">Class 12 Maths</FooterLink>
            <FooterLink href="#">Class 12 Zoology</FooterLink>
            <FooterLink href="#">Class 12 Botany</FooterLink>
          </Column>
          <Column>
            <Heading>Exams</Heading>
            <FooterLink href="#">CBSE</FooterLink>
            <FooterLink href="#">NEET</FooterLink>
            <FooterLink href="#">IIT JEE</FooterLink>
          </Column>
          {/* <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
          <hr></hr>
          <p  style={{ color: "green", 
                   textAlign: "center", 
                   marginBottom: "0px" }}>
                   © Tuitionpad | All Rights Reserved
          </p>
    </Box>
    </footer>
  )
}

export default Footer
