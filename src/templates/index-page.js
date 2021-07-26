import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Features from '../components/Features'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  heading,
  intro

}) => (
  <div>
     <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        
        maxHeight:'100vh',
      }}
    >
      <div className="p-3"
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#C9F6FF',
            textShadow:'2px 2px 5px black',
            lineHeight: '2',
            textAlign:'center',
            // WebkitTextStroke:'0.5px #f8f9fa70',
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            // backgroundImage: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
          }}
        >
          {title}
        </h1>
        <h1
          className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
          style={{
            color: '#C9F6FF',
            lineHeight: '1.5',
            width:'100%',
            textAlign:'center',
            textShadow:'2px 2px 5px black',
            marginBottom:'8rem',
          }}
        >
          {subheading}
        </h1>
      </div>
    </div>

   {/* about me section */}
    <section id="about">
      <div className="container-fluid pb-5 pt-3 text-dark bg-white">
        <div className="row">
            <div className="my-3">
            <h1 className="text-center p-5 mt-0 ">{mainpitch.title}</h1>
            </div>
            </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 justify-content-center">
            <div className="text-center pb-md-5" >
             <img height="500" width="350" className="img-thumbnail img-responsive shadow-sm  mb-2" src={ !!mainpitch.image.childImageSharp ? mainpitch.image.childImageSharp.fluid.src : mainpitch.image} alt="profile"/>
            </div>
            </div>
            <div className="col-lg-5 col-md-12">
            <p className="text-dark">{mainpitch.description}</p>
            </div>
          </div>
      </div>
    </section>
    
{/* projects section */}

  <section>
    <div className="container-fluid bg-dark text-light ">
      <div className="row justify-content-center">
        <h1 className="text-center p-5 mb-0" >{heading}</h1>
      </div>
      <div className="container">
      <Features gridItems={intro.blurbs} />
      </div>
    <div className="text-center bg-dark p-5">
        <Link className="btn text-light"  to="/projects">See all projects</Link>
    </div>
    </div>
      
        
  </section>
 
    {/* blogs section */}
          <section>
              <div className="container-fluid bg-white py-5">
                <div className="row">
                <div className="">
                    <h1 className="text-center text-dark pb-5">Blogs</h1>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12">
                    <BlogRoll/>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center text-white pt-5">
                    <Link className="btn" to="/blog">
                      Explore All Blogs
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
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  heading: PropTypes.string,
  intro:PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        heading={frontmatter.heading}
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
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
        mainpitch {
          title
          image{
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        heading
        intro{
          blurbs{
            subheading
            text
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
    }
  }
`
