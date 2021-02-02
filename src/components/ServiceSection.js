import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import { FaHotTub, FaSwimmingPool, FaHome } from "react-icons/fa";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ServicesSection = () => {
    return (
        <div className="py-5 border-bottom text-center" id="services">
                <h2>Services</h2>
            <Row>
                <Col md="4" sm="12">
                    <FaHotTub size={100} style={{color: "darkcyan", margin: 10}}/>
                    <Card>
                        <Card.Body>
                            <Card.Title>Hot tubs</Card.Title>
                            <Card.Text>
                            We service and maintain all major hot tub brands, including installation and removal. 
                            </Card.Text>
                            <AnchorLink to="/services/#hotTubs" title="Learn More" />
                        </Card.Body>
                    </Card>    
                </Col>
                <Col md="4" sm="12">
                    <FaHome size={100} style={{color: "darkcyan", margin: 10}}/>
                    <Card>
                        <Card.Body>
                            <Card.Title>Rentals</Card.Title>
                            <Card.Text>
                                We service and maintain all types of rental units
                            </Card.Text>
                            <AnchorLink to="/services/#rentals" title="Learn More" />
                        </Card.Body>
                    </Card>    
                </Col>
                <Col md="4" sm="12">
                    <FaSwimmingPool size={100} style={{color: "darkcyan", margin: 10}}/>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pools</Card.Title>                          
                            <Card.Text>
                                We service and maintain pools, including cleaning and treatemnt
                            </Card.Text>
                            <AnchorLink to="/services/#pools" title="Learn More" />
                        </Card.Body>
                    </Card>    
                </Col>
            </Row>
        </div>
    )
}

export default ServicesSection
