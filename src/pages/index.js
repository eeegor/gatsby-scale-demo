import React from "react"
import { Link } from "gatsby"
import { Button } from '@scaleds/react-wrapper'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h3>Scale Button</h3> 
      <scale-button>Hello</scale-button>
    </div>
    <div>
      <h3>React Scale Button</h3> 
      <Button>Hello</Button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
