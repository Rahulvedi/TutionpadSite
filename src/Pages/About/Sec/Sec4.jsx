import React from 'react'
import {Card,Row,Col,Container,Button} from 'react-bootstrap'
import Data from './Data.json'

const Sec4 = () =>{
    return (
        <>
        <Container style={{padding:'20px 20px 20px 20px'}}>
            <h3 style={{padding:'30px 30px 30px 30px'}}><b>Meet our teachers</b></h3>
            <Container>
            <Row xs={1} md={3} className="g-4">
            {Data.map((postdata,index) => {return (
            <Col key={index}>
            <Card>
            <Card.Img variant="top" src={postdata.img}/>
            <Card.Body>
            <Card.Title>{postdata.name}</Card.Title>
            <Card.Text>
            {postdata.Edu}
            </Card.Text>
            <Card.Text>
           {postdata.Des}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
    }
    )
    }
        </Row>
        </Container>
    </Container>
    <br/>
    <Container>
        <div className="container" style={{marginTop: '30px', backgroundColor: '#4444FB', padding: '40px 40px 40px 40px', outline: 'rgb(255,0,0)',borderRadius: '25px'}} rounded='yes'>
            <div className="row">
                <div className="col-sm-8">
                    <h1 style={{color:'white'}}>Book Your Free Trial Class Now</h1>
                    <h6>* Hurry Up! Limited Spots Available</h6>
                </div>
                <div className='col-sm-4'>
                    <button type="button" className="btn btn-danger btn-lg">BOOK YOUR FREE TRIAL NOW</button>
                </div>
            </div>
        </div>
    </Container>
    <Container style={{padding:'40px 40px 40px 40px'}}>
	<div className="star" style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
        }}>
		<img src='/images/star.svg' alt="" />
	</div>
        <div className="block"  style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
        }}>
        <h3>We are looking for awesome teachers!</h3>
        </div>
        <br/>
    </Container>
    <Container>
    <div className="video" style={{
        backgroundColor: '#e6f0f9',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
    }}>
        <iframe width="100% auto" height="315px auto" src="https://www.youtube-nocookie.com/embed/lcZd-DpoBro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
        <br/>
        <div className="btn" style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
        }}>
        <Button herf='#' variant="danger" as="input" type="button" size="lg" value="Apply Now " />
        </div>
        <br/>
    </Container>
    </>
    )
}

export default Sec4
