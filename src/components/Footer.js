/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <center>
      <footer className="footer p-0">
          <div className="container-fluid bg-dark text-muted pb-5">
              <div className="row mr-0">
                <div className="my-5">
                  <Link to="#navbar" smooth duration={1000}>
                <i className="fa fa-angle-up fa-3x fa-inverse" title="back-to-top" aria-hidden="true" ></i>
                  </Link>
                </div>
                </div>

              <div className="row">
                <div >
                  <span className="px-3"><a href="https://github.com/amey-SN"><i className="fa fa-github fa-2x fa-inverse"></i></a></span>

                  <span className="px-3"><a href="https://www.linkedin.com/in/amey-nagmode/"><i className="fa fa-linkedin fa-2x fa-inverse"></i></a></span>
                  </div>
               </div> 

                  <hr/>
                    <p className="text-muted m-0">
                      © {new Date().getFullYear()} Portfolio project developed under the guidance of {'   '}
                      <a className="text-muted text-decoration-none" href="https://Agarkarmedia.com" target="_blank" rel="noopener noreferrer">
                      AgarkarMedia
                      </a>
                  </p>

            </div>
      </footer>
      </center>
     
    )
    
  }
}

export default Footer
