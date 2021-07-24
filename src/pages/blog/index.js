import React from 'react'

import Layout from '../../components/Layout'
import BlogRollAll from '../../components/BlogRollAll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
        <section className="section p-0">
          <div className="container-fluid bg-light py-5">
          <h1
            className="text-center pb-5"
          >
            Blogs
          </h1>
            <div className="content">
              <BlogRollAll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
