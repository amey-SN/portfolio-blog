import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image,content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
 
    <section id="about">
      <div className="container-fluid bg-white text-dark pb-5">
        <div className="row text-center py-5">
          <h1>{title}</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 justify-content-center pr-0">
          <img height="500" width="350" className="img-thumbnail img-responsive shadow-sm mb-2" src={ !!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="profile"/>
          </div>
          <div className="col-lg-4 col-md-12">
          <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image{
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        }
      }
    }
`
