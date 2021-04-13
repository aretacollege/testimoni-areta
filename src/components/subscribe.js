import React from "react"
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../styles/global.css'

const Subscribe = () =>{
    
    return(
        <Container className="bg-blue w-100 ">
          {/* ROW 1 */}
          <Row className="justify-content-md-center section-pad-2">
          <Col md={{ span: 5, offset: 1 }}>
            <h5 className="txt-subs white">Solusi Lebih Mudah Untuk Anda</h5>          
          </Col>

          <Col md={6} sm={6}>
                <a href="https://wa.me/6282211776239" target="blank"><Button variant="outline-primary white mls25">Daftar Sekarang</Button></a>
          </Col>
        </Row>
        </Container>


    )
}

export default Subscribe

