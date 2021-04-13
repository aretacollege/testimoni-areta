import React from "react";
import { Row, Col } from "react-bootstrap";
import areta from "../images/areta.png"
const AboutPage = ()=> {
    return (      
      
        <Row>
          <Col>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">About</h2>
           <center><img
              src={areta}
              className="rounded"
              alt=""
            /></center>
            <br />
            <h3 className="text-center">Areta adalah</h3>
          </Col>
        </Row>
      
     
    );
  }

export default AboutPage;