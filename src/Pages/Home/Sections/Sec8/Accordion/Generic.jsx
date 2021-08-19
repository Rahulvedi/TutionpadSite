import React from 'react'

const Generic = () => {
  return (
    <div className="accordion render-switch" id="accordionExample">
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Tutionpad?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Tuitionpad is India's best online face to face live tutoring platform for CBSE, ICSE, IB, State Boards, IIT JEE, NEET, Olympiads and other K-12 Competitions.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What all subject tuitions are available?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            We currently offering LIVE online face-to-face tuitions for Maths, Science, English for Grades 8 to 12 for CBSE, ICSE, IB, State Boards and Physics, Chemistry, Zoology, Botany, Math for IIT JEE and NEET. However, we may add remaining subjects soon depending on requirements.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            What is the duration of a class?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Normally, our classes are held for 1 hour.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Can I take a free demo class? How?
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Yes, you can take a free demo class before enrolling in a batch. You can book your free demo below.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Do you provide any printed study material to students?
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            We provide study material in PDF files that can be printed whenever needed.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingSix">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            How many free demo classes I can take?
          </button>
        </h2>
        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            We provide one demo class free. If you are not sure about your experience after first demo class, we may provide one more, it depends on case-by-case basis.
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingSeven">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          Is the teacher remains same during actual class who conducted demo class? 
          </button>
        </h2>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Yes, the teacher remains same. We do class scheduling in a way in which the student gets access to the best teacher for the respective topic/subject. 
          </div>
        </div>
      </div>
      <div className="accordion-item render-switch-items">
        <h2 className="accordion-header" id="headingEight">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          Will your course curriculum cover other reference books as well? 
          </button>
        </h2>
        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Yes, the course content has been exhaustively created through a mix of multiple publications, in addition to covering the core school curriculum.  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generic
