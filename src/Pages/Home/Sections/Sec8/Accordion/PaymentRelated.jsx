import React from 'react'

const PaymentRelated = () => {
  return (
    <div className="accordion render-switch" id="accordionExample">
<div className="accordion-item render-switch-items">
<h2 className="accordion-header" id="headingOne">
  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  I do not have online payment(Net Banking) activated, can I use any other mode for payment?
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  You can use your Debit card, ATM card, Credit card or payment wallets like Paytm/PayZapp/Freecharge to enroll in the course. If you do not have any of the above payment methods, send us an email at  <b>hello@tuitionpad.com</b>  with your details. 
  </div>
</div>
</div>
<div className="accordion-item render-switch-items">
<h2 className="accordion-header" id="headingTwo">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
  I entered wrong email-id and/or phone number while making the transaction, what should I do?
  </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  In case you have entered a wrong email-id or phone number, please send us an email at <b>hello@tuitionpad.com</b>  with your order details, correct phone number, correct email id and scanned copy of your identity proof (driving license/voter card/aadhar card). 
  </div>
</div>
</div>
<div className="accordion-item render-switch-items">
<h2 className="accordion-header" id="headingThree">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
  My money got deducted twice while making the transaction, what should I do?
  </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  No need to worry! Generally, one of the transactions gets refunded back to your bank account automatically. In case this does not happen, you can reach out to us at <b>hello@tuitionpad.com</b>  and we will track your payment to get it refunded. 
  </div>
</div>
</div>
<div className="accordion-item render-switch-items">
<h2 className="accordion-header" id="headingFour">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
  My transaction failed, but money got deducted from my account, what should I do?
  </button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  Do not worry. Your money will be automatically refunded to your account. If you still face any issues with the failed transaction then drop us a mail at  <b>hello@tuitionpad.com</b>  with your details. 
  </div>
</div>
</div>
</div>
)
}

export default PaymentRelated
