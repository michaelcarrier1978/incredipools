import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { FaPhone, FaUserAlt, FaEnvelope } from "react-icons/fa";

const contact = () => {
    return (
        <div className="text-center py-5" id="contact">
        <h2>Contact us</h2>
        <Row className="justify-content-center">
            <Col md="12" lg="4">
                <p><FaPhone/><a href="tel:801-123-1234">801-123-1234</a></p>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Form action="https://formspree.io/f/xdopdzrp" method="POST" className="mb-4 col-sm-12 col-md-12 col-lg-6">
                <Row>
                     <Col sm="1">
                        <FaUserAlt/>
                    </Col>
                    <Col sm="11">
                        <Form.Group controlId="formBasicName">
                            <Form.Control required type="name" placeholder="Your Name" name="name"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm="1">
                        <FaEnvelope/>
                    </Col>
                    <Col sm="11">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control required type="email" placeholder="Your Email" name="email" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formBasicTextarea">
                    <Form.Control required type="textarea" as="textarea" name="message" rows={3} placeholder="Your Message" />
                </Form.Group>
                <Button className="btn" type="submit">
                    Send
                </Button>
            </Form>
        </Row>
        </div>
    )
}

export default contact
