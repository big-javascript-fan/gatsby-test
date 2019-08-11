import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from '../components/content'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content />
  </Layout>
)

export default IndexPage
