import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Service from "../components/ServicePage"
import { Container } from "react-bootstrap"
import Helmet from "react-helmet"

const Services = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Services" />
    <Helmet
        bodyAttributes={{
            class: 'services-page'
        }}
    />
    <Container>
      <Service />
    </Container>
  </Layout>
)

export default Services