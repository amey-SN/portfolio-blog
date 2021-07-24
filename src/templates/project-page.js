import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const ProductPageTemplate = ({
  heading, 
  intro,
}) => (
  <>
  <section>
    <div className="container-fluid bg-white p-3">
      <div className="row justify-content-center">
        <h1 className="text-center pt-5" >{heading}</h1>
      </div>
      <div className="container  pt-0">
      <Features gridItems={intro.blurbs} />
      </div>
    </div>
  </section>
  </>
)

ProductPageTemplate.propTypes = {
  heading: PropTypes.string,
 
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        heading={frontmatter.heading}
       
        intro={frontmatter.intro}
       
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            text
          }
        }
       
      }
    }
  }
`
