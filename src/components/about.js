import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import areta from "../images/areta.png"
class AboutPage extends React.Component {
  render() {
    return (
        
      <MDBContainer>
        <MDBRow>
          <MDBCol>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">About</h2>
           <center><img
              src={areta}
              className="rounded-circle"
              alt=""
            /></center>
            <br />
            <h3 className="text-center">Areta adalah</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
     
    );
  }
}

export default AboutPage;