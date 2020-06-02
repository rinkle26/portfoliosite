import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faLinkedin,faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";


function Footer(){

    return(
        <footer>
            <Container className="mt-5" fluid="true" style={{color:'#ffffff80', backgroundColor:'#0f151b', fontSize:'larger', clear: 'left'}}>
                <Row className="justify-content-between p-3 mt-5">
                    <div class="col-md-12 text-center" style={{paddingTop:"3%"}}>
                        <p className="monospace">Get in Touch</p>
                        <ul class="list-inline social social-white-alt social-rounded social-sm mb-0">
                        
                            <li class="list-inline-item"><a href="https://www.facebook.com/rinkle.seth/" target="_blank"> <FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li class="list-inline-item"><a href="https://www.linkedin.com/in/rinkle-seth" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li class="list-inline-item"><a href="https://github.com/rinkle26" target="_blank"> <FontAwesomeIcon icon={faGithub}/></a></li>
                            <li class="list-inline-item"><a href="https://www.instagram.com/rinkleseth/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li class="list-inline-item"><a href="https://medium.com/@sethrinkle" target="_blank"><FontAwesomeIcon icon={faMedium}/></a></li>
                        </ul>
                    </div>
                </Row>
                <Row className="justify-content-between p-3">
                    <Col md={3} sm={12}>
                        Rinkle Seth
                    </Col>
                    <Col className="d-flex justify-content-end" md={4}>
                        Copyright &copy; 2020 - All Rights Reserved.
                    </Col>
                </Row>
               
  
            </Container>

        </footer>
    );

}

export default Footer;