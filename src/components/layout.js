/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import NavBar from "./navBar"
import Footer from "./footer"
import Contact from "./contact"
import PageLinks from "./pageLinks"

const Layout = ({ children, pageInfo }) => {
    return (
      <>
        <Container fluid className="px-0 main">
          <header>
            <NavBar pageInfo={pageInfo}/>
          </header>
          <Row noGutters>
            <Col>
                <main>{children}</main>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm="12">
              <Contact />
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row className="no-gutters">
            <Col sm="12">
              <PageLinks/>
            </Col>
            <Col sm="12">
              <Footer />
            </Col>
          </Row>
        </Container>
      </>
    )
  }

export default Layout
