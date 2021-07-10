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
        <section className="section">
          <div className="container mb-5">
            <div className="row">
              <h1 className="text-center pb-3" >CONTACT</h1>
            </div>
            <div className="text-center display-6 px-5">
              <div className="row justify-content-center">
              Would you like to work with me? Awesome! 
              </div>
              <div className="py-5">
                <span className="pb-2 px-1 h3">
                <button className="btn"><a className="text-reset text-decoration-none" target="_blank" href="mailto:ameynagmode@gmail.com?Subject=From%20portfolio%20contact%20section">Contact Us</a></button>
                </span>
                </div>
            </div>
            <div className="row">
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
