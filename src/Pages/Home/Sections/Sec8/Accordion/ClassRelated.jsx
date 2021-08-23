import React from "react";

const ClassRelated = () => {
  return (
    <div className="accordion render-switch" id="accordionExample">
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What things required to attend an online classes?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            You can access online classes through Laptop, Tablet or Smartphone.
            We recommends you to use join via laptop for best learning
            experience. Also, you just require speedy Internet connection to
            attend classes even on the mobile data, however, WiFi is recommended
            for better connectivity.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What is the usual Batch Strength?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            We have very small batches - One Teacher for One Student and One
            Teacher for every Five Students for better engagement and attention.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How will you clear doudts?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            We have very small batches(max 5 students) thus our teachers can
            give full attention to every student and the best possible
            engagement, after that no doubts remains. If still, student can
            raise hand anytime during className and can clear his/her doubts.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            How will you ensure student is learning from Tuitionpad's teachers?
            How will you ensure student is learning from Tuitionpad's teachers?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            To ensure the maximum and daily outcome, after every class we
            conducts a small activity like quiz or assessment and share the
            outcome report with parents.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Can I see again live classes for revision?
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Yes, every face to face live class is recorded in system and we make
            available that after the live class, students can revise that class
            anytime.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Will you cover entire Syllabus?
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            We have full syllabus batches and devided syllabus batches. In full
            syllabus batches entire syllabus will be covered.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRelated;
