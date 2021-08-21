import React from "react";
import FreeDemoClass from "./FreeDemoClass/FreeDemoClass";
import ReferEarn from "./Refer&Earn/Refer&Earn";
import WriteUs from "./WriteUs/WriteUs";
import { ContactAcc } from "./ContactAccordionStyle";

const ContactAccordion = () => {
  return (
    <ContactAcc className="accordion " id="accordionExample">
        <div className="accordion-item p-1">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Request a free demo class
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <FreeDemoClass/>
            </div>
          </div>
        </div>
        <div className="accordion-item p-1">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Apply for "Refer & Earn" program
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ReferEarn/>
            </div>
          </div>
        </div>
        <div className="accordion-item p-1">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
           Anything else? Write to us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <WriteUs/>
            </div>
          </div>
        </div>
    </ContactAcc>
  );
};

export default ContactAccordion;
