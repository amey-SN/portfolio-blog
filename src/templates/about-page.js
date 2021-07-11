import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image,content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
    {/* self added */}
    <section id="about">
      <div className="container-fluid bg-white text-dark pb-5">
        <div className="row text-center py-5">
          <h1>{title}</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 justify-content-center pr-0">
          <img height="500" width="350" className="img-thumbnail img-responsive shadow-lg  mb-2" src="/img/profile.jpg" alt="profile"/>
          </div>
          <div className="col-lg-4 col-md-12">
          <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
    {/* self added ends here */}
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section> */}
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
        }
      }
    }
`
