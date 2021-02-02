import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Image from "gatsby-image"
import { Navbar, Nav } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: {eq: "Incredipools.png"}) {
      childImageSharp {
        fixed(height: 150, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const CustomNavbar = ({ pageInfo }) => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/">
          {/* <Navbar.Brand as="span">Incredipools logo</Navbar.Brand>         */}
          <Image fixed={fixed} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <a href="tel:801-123-1234">801-123-1234</a>
          <AnchorLink to="/#contact" title="Contact Us" className="home" />
          <AnchorLink to="/services/#contact" stripHash title="Contact Us" className="services" />
          <Nav activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/services" className="link-no-style">
              <Nav.Link as="span" eventKey="services">
                Services
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
