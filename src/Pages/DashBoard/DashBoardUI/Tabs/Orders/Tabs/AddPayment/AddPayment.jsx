import React from 'react'
import { Container,Box } from '../../OrdersStyles'
import { Section,Text,BlurText } from '../../../Report/ViewReport/ViewReportStyles'
import {BiWallet} from 'react-icons/bi'

const AddPayment = () => {
    return (
        <Container style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Section style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Box style={{borderRadius:"30rem",margin:"1rem"}} ><BiWallet style={{fontSize:"3rem"}}/></Box>
                <h1 style={{fontSize: "16px",color: "rgba(52, 70, 69, 0.78)"}}>
                You have ₹10000 unused balance in your wallet.</h1> 
            </Section>
            <Section style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Text>Add Payment</Text>
                <input type="mob" placeholder="Enter amount" style={{fontSize: "16px",backgroundColor: "#E6E6E6",border:"none",outline:"none",borderRadius:"5px",padding:"1rem"}}/><br/>
                <button style={{fontSize: "16px",color:"#ffffff",backgroundColor: " #007770",border:"none",outline:"none",borderRadius:"5px",padding:"1rem 5rem",marginBottom:"1rem"}}>Add Payment</button>
                <BlurText>All transactions are safe and secure.</BlurText>
            </Section>
             
            
        </Container>
    )
}

export default AddPayment
