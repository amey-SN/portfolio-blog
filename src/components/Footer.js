/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
import ScrollToTop from "react-scroll-to-top";


const Footer = class extends React.Component {
  render() {
    return (
      <center>
      <footer  className="footer p-0">
          <div className="container-fluid bg-dark text-muted pb-5">
              <div className="row">
                <div className="my-3">
                  
                  <ScrollToTop style={{position:'relative', bottom:'4px', right:'4px' , boxShadow:'none', color:'#fff', backgroundColor:'#212529' , height:'4rem' , width:'4rem',}}  svgPath="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z" smooth color="#fff" viewBox="0 0 32 32"  />
                </div>
                </div>

              <div className="row pt-3">
                <div >
                  <span className="px-3"><a href="https://github.com/amey-SN" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x fa-inverse"></i></a></span>

                  <span className="px-3"><a href="https://www.linkedin.com/in/amey-nagmode/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x fa-inverse"></i></a></span>
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
