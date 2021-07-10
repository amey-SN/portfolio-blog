import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
     <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'linear-gradient(to right, #b993d6, #8ca6db)',
            lineHeight: '1',
            padding: '0.25em',
            WebkitTextStroke:'0.5px #f8f9fa70',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: '#C9F6FF',
            lineHeight: '1',
            paddingLeft:'0.8em',
            paddingBottom: '10.25em',
            textShadow:'2px 2px 5px black',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>

   
    <section>
      <div className="container-fluid pb-5 pt-3  text-dark bg-white ">
        <div className="row">
            <div className="my-3">
            <h1 className="text-center p-5 mt-0 ">{mainpitch.title}</h1>
            </div>
            </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
            <img height="500" width="350" className="img-thumbnail img-responsive shadow-lg  mb-2" src="/img/profile.jpg" alt="profile"/>
            {/* <img className="img-thumbnail img-responsive shadow-lg" src={!!abtimg.childImageSharp ? abtimg.childImageSharp.fluid.src : abtimg} alt="profile"/> */}
            
            </div>
            <div className="col-lg-4 col-md-12">
            <p className="text-dark lead">{mainpitch.description}</p>
            </div>
          </div>
      </div>
    </section>
    <section>
          <div className="container-fluid bg-white my-2 py-2">
          <div className="row mt-2 pt-3">
            <h1 className="text-center pt-5 pb-3">{heading}</h1>
            </div>
              <div className="row justify-content-center mr-0">
                <div className="col-lg-4 col-md-12 p-3 m-2">
                   <img className="img-thumbnail img-responsive shadow-lg" src="/img/project1.jpg" alt="profile"/>
                </div>
                <div className="col-lg-4 col-md-12 p-3 m-2">
                <h3>Covidtimes.xyz</h3>
                <p>{description}</p>
                <button className="btn"><a className="text-decoration-none" href="https://github.com/amey-SN/covidtimes.xyz">Source Code</a></button>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="text-center my-5">
              <Link className="btn"  to="/products">See all projects</Link>
              </div>
              </div>
             
          </div>
    </section>
    {/* blogs section */}
          <section>
              <div className="container-fluid bg-white">
                <div className="row">
                <div className="mt-2 pt-3">
                    <h1 className="text-center text-dark pt-2 pb-4">Blogs</h1>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12">
                    <BlogRoll/>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center text-white my-5 mx-0">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                    </div>
                </div>
              </div>
          </section>
    {/* blog section ends */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        abtimg={frontmatter.mainpitch.image}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        title
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 440, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
