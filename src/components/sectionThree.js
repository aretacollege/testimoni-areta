import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import TestimonialsPage from "./testimoni"
import ProjectsPage from "./project"
import AboutPage from "./about"
// import image1 from "../images/s3.png"
import image2 from "../images/s4.png"
// import image3 from "../images/s5.png"

const SectionThree = () =>{    
    return(
    <Container className="partition">        
           <TestimonialsPage />    
            {/* ROW 2 */}
            <Row className="justify-content-md-center mb3">
                <Col md={5} large={6}>
                    <img src= {image2} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
                <Col className="cont3" md={{ span: 4, offset: 1 }} sm={6} xs={6}>
                    <h1 className="head1">Data yang tepat dan akurat</h1>
                    <p className="resp">Data adalah yang terpenting untuk Anda. Evomo menampilkan informasi yang <b>valid</b> dan bernilai yang Anda butuhkan.</p>
                </Col>             
            </Row>
           <ProjectsPage />
           <AboutPage />
        </Container>
    )
}

export default SectionThree

