import React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import ServiceSection from "../components/ServiceSection"
import Examples from "../components/Examples"
import Reviews from "../components/Reviews"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
      <Helmet
        bodyAttributes={{
            class: 'home-page'
        }}
    />
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
     <section id="home" className="d-flex align-items-center position-relative vh-100 cover hero">
        <Container fluid className="container-fluid-max">
            <Row>
                <Col sm="12">
                    <h1 className="text-white text-center">Incredipools</h1>
                    <Col lg="6" sm="12" className="border-bottom mx-auto"></Col> 
                    <Col lg="6" sm="12" className="mx-auto text-center text-white">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, repellat veniam eligendi voluptate quaerat fugit, nam debitis at rem accusamus deleniti eius aliquid molestiae eum harum, placeat vel officia laboriosam.</p>
                        <AnchorLink to="/#contact" title="Contact us"/>
                    </Col>
                </Col>
            </Row>
        </Container>
    </section>
   <Container>
    <About />
    <ServiceSection />
    <Examples />
    <Reviews />
   </Container>
  </Layout>
)

export default IndexPage
