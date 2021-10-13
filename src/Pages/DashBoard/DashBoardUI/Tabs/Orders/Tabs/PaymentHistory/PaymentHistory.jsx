import React from "react";
import { Section,SubSection,BlurText,BoxDate,Text,SubText,Para,Div,Dispute,Resolved } from "../../../Report/ViewReport/ViewReportStyles";
import { Container } from "../../OrdersStyles";

const PaymentHistory = () => {
  return (
    <Container>
      <Section>
        <h1 style={{ fontSize: "16px", color: "rgba(52, 70, 69, 0.78)" }}>
          You have spent <b>₹12000</b> from your wallet.{" "}
        </h1>
      </Section>
      <Section>
        <SubSection>
         <Dispute>
            <Text>Mr. Somesh</Text>
            <SubText>Physics Class</SubText>
            <Para>
                <Div>
                <BlurText>Teaching Hours </BlurText>
                <Text style={{margin:"0 2.8rem"}}>15 Hours</Text>
                </Div>
                <Div>
                <BlurText>Fee Per Hour</BlurText>
                <Text style={{margin:"0 3.8rem",fontWeight:"500"}}>₹500</Text>
                </Div>         
            </Para>
            <Div>
            <Resolved>Amount Spent </Resolved>
            <BoxDate style={{margin:"0 2.8rem"}}>₹ 7500</BoxDate>
            </Div>
          </Dispute>
         <Dispute>
            <Text>Mr. Somesh</Text>
            <SubText>Physics Class</SubText>
            <Para>
                <Div>
                <BlurText>Teaching Hours </BlurText>
                <Text style={{margin:"0 2.8rem"}}>15 Hours</Text>
                </Div>
                <Div>
                <BlurText>Fee Per Hour</BlurText>
                <Text style={{margin:"0 3.8rem",fontWeight:"500"}}>₹500</Text>
                </Div>         
            </Para>
            <Div>
            <Resolved>Amount Spent </Resolved>
            <BoxDate style={{margin:"0 2.8rem"}}>₹ 7500</BoxDate>
            </Div>
          </Dispute>
         <Dispute>
            <Text>Mr. Somesh</Text>
            <SubText>Physics Class</SubText>
            <Para>
                <Div>
                <BlurText>Teaching Hours </BlurText>
                <Text style={{margin:"0 2.8rem"}}>15 Hours</Text>
                </Div>
                <Div>
                <BlurText>Fee Per Hour</BlurText>
                <Text style={{margin:"0 3.8rem",fontWeight:"500"}}>₹500</Text>
                </Div>         
            </Para>
            <Div>
            <Resolved>Amount Spent </Resolved>
            <BoxDate style={{margin:"0 2.8rem"}}>₹ 7500</BoxDate>
            </Div>
          </Dispute>
         <Dispute>
            <Text>Mr. Somesh</Text>
            <SubText>Physics Class</SubText>
            <Para>
                <Div>
                <BlurText>Teaching Hours </BlurText>
                <Text style={{margin:"0 2.8rem"}}>15 Hours</Text>
                </Div>
                <Div>
                <BlurText>Fee Per Hour</BlurText>
                <Text style={{margin:"0 3.8rem",fontWeight:"500"}}>₹500</Text>
                </Div>         
            </Para>
            <Div>
            <Resolved>Amount Spent </Resolved>
            <BoxDate style={{margin:"0 2.8rem"}}>₹ 7500</BoxDate>
            </Div>
          </Dispute>
        </SubSection>
      </Section>
    </Container>
  );
};

export default PaymentHistory;
