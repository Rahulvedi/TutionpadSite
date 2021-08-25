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




       {/* <Queries> 
            <Title>Your most asked queries are answered by us</Title>
          <div className="accordion " id="accordionExample">
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingOne">
              <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  How can I invite my friends?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Once you apply for "Refer & Earn" Program, you will get email from us with your referral Code. Now, you can share your referral code with your friends/family through WhatsApp, Facebook, SMS, Mail etc. All the sharing links are available on the same screen. You are required just to tap on preferred link to copy and share with your friends and family.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Who can I refer?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Any of your friends or family with children from ages 12-18 would love Tuitionpad. There is no previous qualification, skill or aptitude needed by students to get the best out of Tuitionpad.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is there a limit to how much reward I can earn through this program?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                No. The more people you refer to Tuitionpad, the more rewards for you! However, Keep in mind, the intent is to add members who will benefit from the Tuitionpad tuitions. We would request that you make your referral count!
                </div>
              </div>
            </div>
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
                For every referral that enrolls with Tuitionpad, attends the FREE Demo class and buys a paid plan with Tuitionpad, you will receive your referral amount of INR ₹1000 if referred student opts to pay in one time payment option(saves 5%).
                    You will get paid as per your referral chooses:
                    ₹1000 - If referred student pays in one time payment option (saves 5%).
                    ₹600 - If reffered students choose to pay in 3 installments and enrolled in program by paying first installment.
                    ₹200 - when student pays second installment (after 30 days).
                    ₹200 - when student pays third installment (after 30 days of second installment).
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  When I refer someone to Tuitionpad, can they receive a special discount?

                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Yes! When your referrals enrolls with us, attends a Demo class and buy a paid subscription from Tuitionpad by paying in one time payment option, we will give them a fixed discount of 5% on fee payment.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                 How my friend will use my referral link/code?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                When your referral requesting for a "FREE Demo Class", he/she need to enter your referral link/code in Demo Class Form's "Details About Your Request" input as shown below-

 
                    ---deatils student wants to mention---
                    --- Reference by- "Mohit99999"---


                    here "Mohit99999" is your reference code. The demo request we get with these reference number, we will count this student in your account.
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
                 Which plan and age groups can I collect a referral reward for?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                You will get referral reward for every referred student who buys a plan from available tuition plans (Class 8 to 12) or from *upcoming plans or courses.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                 When will I receive my referral amount?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                We will credit you as the referral in 7 business days after the purchase of a paid plan with Tuitionpad.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                 How will I know if my referral has joined Tuitionpad?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                You will receive a mail for each successful referral who joins Tuitionpad.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                How can I get help if I have additional questions?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Write to us at hello@tuitionpad.com for any queries or call us at +91 7976649684.
                </div>
              </div>
            </div>
          </div>
        </Queries> */}

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
