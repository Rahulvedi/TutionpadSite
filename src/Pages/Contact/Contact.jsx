import React from 'react'
import { Header } from '../../Components/default'
import TopSection from './TopSection/TopSection'
import ContactAccordion from './ContactForm/ContactAccordion'
import Social from './Social/Social'
import { Footer } from '../../Components/default'
const Contact = () => {
    return (
        <>
          <Header/>  
          <TopSection/>
          <ContactAccordion/>
          <Social/>
          <Footer />
        </>
    )
}

export default Contact
