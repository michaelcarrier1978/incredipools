import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Col, Row } from 'react-bootstrap'
import Image from "gatsby-image"

const query = graphql`
  {
    allStrapiServices {
      nodes {
        title
        description
        anchor
        strapiId
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ServicePage = () => {
    const data = useStaticQuery(query)
    const {allStrapiServices:{nodes:services}} = data
    return (
        <div className="service-page">
            <Row>
                {
                    services.map((item) => {
                        return <Row id={item.anchor} key={item.strapiId} className="py-5">
                            <Col className="text" md="12" lg="6">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </Col>
                            <Col md="12" lg="6">
                                <Image className="img-right" fluid={item.image.childImageSharp.fluid} />
                            </Col>
                        </Row>
                    })
                }
            </Row>
        </div>
    )
}

export default ServicePage
