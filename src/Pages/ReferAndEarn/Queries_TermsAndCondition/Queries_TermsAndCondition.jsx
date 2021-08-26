import React from "react";
import {QueriesTermsAndCondition, Queries, TermsAndCondition,Title, UnorderdList ,LiItem,SubTitle} from "./Queries_TermsAndConditionStyle";
import Data from './Queries.json'
const QueriesTermsCondition = () => {
  return (
    <>
      <QueriesTermsAndCondition>
      <Queries> 
            <Title>Your most asked queries are answered by us</Title>
            {Data.map((query) => {return (
          <div className="accordion " id="accordionExample">
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id={"headingOne" + query.id}>
              <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOne" + query.id}
                  aria-expanded="false"
                  aria-controls={"collapseOne" + query.id}
                >
                  {query.title}
                </button>
              </h2>
              <div
                id={"collapseOne" + query.id}
                className="accordion-collapse collapse"
                aria-labelledby={"headingOne" + query.id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                {query.Des}
                </div>
              </div>
            </div>
          </div>
      );
        }
        )
        }
        <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                 What can I earn?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                For every referral that enrolls with Tuitionpad, attends the FREE Demo class and buys a paid plan with Tuitionpad, you will receive your referral amount of INR ₹1000 if referred student opts to pay in one time payment option(saves 5%). <br/><br/>
                   <b> You will get paid as per your referral chooses:</b>
                <br/><br/>
                    ₹1000 - If referred student pays in one time payment option (saves 5%). <br/>
                    ₹600 - If reffered students choose to pay in 3 installments and enrolled in program by paying first installment. <br/>
                    ₹200 - when student pays second installment (after 30 days). <br/>
                    ₹200 - when student pays third installment (after 30 days of second installment).
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                 How my friend will use my referral link/code?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                When your referral requesting for a "FREE Demo Class", he/she need to enter your referral link/code in Demo Class Form's "Details About Your Request" input as shown below- <br/> <br/> <br/>
                <b>
                ---deatils student wants to mention---<br/>
                --- Reference by- "Mohit99999"---
                </b>
                <br/> <br/> <br/>
                here "Mohit99999" is your reference code. The demo request we get with these reference number, we will count this student in your account.
                </div>
              </div>
            </div>
        </Queries>

        <TermsAndCondition>
            <Title>Terms and Conditions</Title>
                <SubTitle>Definitions:</SubTitle>
                <UnorderdList>
                    <LiItem>
                    Your most asked queries are answered by us
                    </LiItem>
                    <LiItem>
                    Referred Friend: A person who has been invited to Tuitionpad.com by referrer and had used Referrer’s referral code or link while scheduling a Demo Class with Tuitionpad
                    </LiItem>
                    <LiItem>
                    Successful Referral: A referral is considered successful when a Referred Friend purchases a Tuitionpad Tuition Plan or Course
                    </LiItem>
                </UnorderdList>

                <SubTitle>Terms and Conditions:</SubTitle>
            <UnorderdList>
                <LiItem>
                This referral program is only applicable if a friend is a new user for Tuitionpad.com and has never made a purchase at Tuitionpad.com before.
                </LiItem>
                <LiItem>
                For Referred Friends, they need to book a Free Demo Class on Tuitionpad using Referrer’s referral link or code in “Details About Your Request” input of the Demo Class Form to count the referred student in your referral account.
                </LiItem>
                <LiItem>
                If an invited friend makes a purchase without the referral code, you will not be entitled for Paytm/ PhonePe /GooglePay reward. They will not be considered as Referred Friends.
                </LiItem>
                <LiItem>
                Referrer and Referred Friend(s) who are eligible for Paytm/ PhonePe /GooglePay cashback must have a Paytm/ PhonePe /GooglePay account with the same number that you shared while applying at Tuitionpad for "Refer and Earn" program. In case if you do not have a Paytm/ PhonePe /GooglePay account linked to the shared number, Tuitionpad will not be able to give them Paytm/ PhonePe /GooglePay cashback.
                </LiItem>
                <LiItem>
                Tuitionpad Plans or courses should be purchased online only.
                </LiItem>
                <LiItem>
                Paytm/ PhonePe /GooglePay cashback will be credited to Referrer’s UPI wallet directly only after 7 business days of the successful purchase of Plan or Course by Referred Friend(s).
                </LiItem>
                <LiItem>
                Tuitionpad.com has complete authority to change the reward amount at any point of time. Successful Referral after such change(s) will receive the Paytm/ PhonePe /GooglePay cashback as per the latest reward amount.
                </LiItem>
                <LiItem>
                Tuitionpad.com has complete authority to close this referral program at any point of time and will not be responsible for providing Paytm/ PhonePe /GooglePay cashback in that scenario.
                </LiItem>
            </UnorderdList>

        </TermsAndCondition>
      </QueriesTermsAndCondition>
    </>
  );
};

export default QueriesTermsCondition;
