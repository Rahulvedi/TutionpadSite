import React from 'react'
import {Container} from 'react-bootstrap'
import Data from './s3data.json'

const Sec3 = () => {
    return (
      <>
      <Container style={{padding:'40px 40px 40px 40px'}}>
            <h3><b>Why we exist?</b></h3>
            <Container>
            {Data.map((postdata) => {return (
              <div className="col-sm-3">
              <div className="card" style={{padding:'10px'}}>
                <div className="card-body">
                  <div className="col-sm-6">
                    <img src={postdata.svg} alt="" />
                    <h4 className="card-title">{postdata.title}</h4>
                  </div>
                  <div className="col-sm-6">
                    <p className="card-text">{postdata.desc}</p>
                  </div>
                  
                    </div>
                  </div>
                  </div>

);
    }
    )
    }
      </Container>
      </Container>
      </>
    )
}

export default Sec3
