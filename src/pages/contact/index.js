import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section p-0">
          <div className="container-fluid bg-light py-5">
            <div className="row">
              <h1 className="text-center pt-3 mb-5" >CONTACT</h1>
            </div>
            <div className="text-center px-1">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                <p className="lead px-1">
                I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
                
                I want to avoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. 
                If that all sounds about right, then lets for sure chat about how we can work together.
			
              <br/>
                Feel free to reach out through any platforms bellow:
			
              </p>
                </div>
              
              </div>
              <div className="py-5">
                <span className="pb-5 px-1 h3">
                <button className="btn"><a className="text-reset text-decoration-none" target="_blank" rel="noreferrer" href="mailto:ameynagmode@gmail.com?Subject=From%20portfolio%20contact%20section">Start a Conversation</a></button>
                </span>
                </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
