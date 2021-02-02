import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Card, Col, Row } from "react-bootstrap"
import Image from "gatsby-image"

const query = graphql`
  {
    allStrapiExamples {
      nodes {
        description
        strapiId
        title
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

const Examples = () => {
    const data = useStaticQuery(query)
    const {allStrapiExamples:{nodes:examples}} = data
    return (
        <div className="text-center py-5 border-bottom" id="examples">
            <h2>Examples</h2>
            <Row>
                {
                    examples.map((item) => {
                        return <Col key={item.strapiId} lg="4" md="12" className="my-3">
                                <Card>
                                <Image variant="top" className="card-img-top" fluid={item.image.childImageSharp.fluid} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
            
        </div>
    )
}

export default Examples
