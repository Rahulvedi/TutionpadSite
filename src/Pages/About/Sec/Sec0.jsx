import React from 'react'

const Sec0 = () => {
    return (
        <> 
        <div className="container">
        <style dangerouslySetInnerHTML={{__html: "\n {\n  background-color:#E6F0F9;\n  }\n  .fakeimg {\n    height: 364.219px auto;\n    width:  391.984px auto;\n  }\n  " }} />
          <div className="container" style={{marginTop: '30px', backgroundColor: '#E6F0F9', padding: '1em'}}>
            <h2 style={{textAlign: 'center'}}><b>About Us</b></h2>
            <div className="row" style={{marginTop: '30px'}}>
              <div className="col-sm-4">
                <div className="fakeimg"><img src="https://tuitionpad.com/wp-content/uploads/2020/08/aboutus.jpg" width="100%" alt="" /></div>
                <hr className="d-sm-none" />
              </div>
              <div className="col-sm-8">
                <h5>We are made to make personalized learning accessible, affordable and outcome oriented.</h5>
                <br />
                <p>What can be the best personalized learning experience for individuals?</p>
                <p>Face to face learning by selected India's Best Teachers, Max. 5 students in a group, interactive teaching methodology, 100% individual attention, parallel assessments to improve the weaker side and results, weekly reporting, PTMs and all these from the comfort of your home makes Tuitionpad the platform every individual student needs for best foundational learning.</p>
                <button type="button" className="btn btn-danger" style={{marginTop: '30px'}}>BOOK YOUR FREE DEMO CLASS NOW</button>
                <br />
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Sec0
