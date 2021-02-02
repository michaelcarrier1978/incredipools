import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const pageLinks = () => {
    return (
        <div className="page-links">
            <Container>
                <Row className="py-5">
                    <Col lg="4">
                        <h5>Incredipools</h5>
                        <Col className="border-bottom"></Col> 
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, repellat veniam eligendi voluptate quaerat fugit, nam debitis at rem accusamus deleniti eius aliquid molestiae eum harum, placeat vel officia laboriosam.</p>
                    </Col>
                    <Col lg="4">
                        <h5>Areas Served</h5>
                        <Col className="border-bottom"></Col> 
                        <p>Park City</p>
                        <p>Heber</p>
                        <p>Salt Lake City</p>
                        <p>Sandy City</p>
                        <p>Draper City</p>
                    </Col>
                    <Col lg="4">
                        <h5>Contact</h5>
                        <Col className="border-bottom"></Col> 
                        <p>Draper, Utah 84092</p>
                        <p>email@email.com</p>
                        <p><a href="tel:801-123-1234">801-123-1234</a></p>
                        <p>Hours M - F 8 am to 8 pm</p>
                        <p>Social links</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default pageLinks
