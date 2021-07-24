/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <section id="navbar">
      <nav
        className="navbar navbar-nav p-0" 
        style={{
          background:'rgba( "255, 255, 255, 0.20") '  ,
          boxShadow:` 0 8px 32px 0 rgba(' 31, 38, 135, 0.37' )`,
          backdropFilter:` blur( '2.5px' )`,
          WebkitBackdropFilter: `blur( '2.5px' )`,
          border:` 1px solid rgba( '255, 255, 255, 0.18' )`,
      }}
        role="navigation"
        aria-label="main-navigation" >
        <div className="container mb-0" >
            {/* Hamburger menu */}
            <div style={{
              position: 'absolute',
              top: '2px',
              right: '4px',
            }}
              className={`navbar-burger burger mx-0 ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span className="text-light" />
              <span className="text-light" />
              <span className="text-light" />
            </div>
          
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}      >
            <div className="navbar-start ">
            <h2 style={{
            color: 'linear-gradient(to right, #b993d6, #8ca6db)',
            lineHeight: '2',
            WebkitTextStroke:'0.5px #f8f9fa70',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
          }} className="brand px-3 text-light mb-0 py-0">Amey Nagmode</h2>
            <Link to="/" className="navbar-item px-3 text-light text-decoration-none" >
              Home
            </Link>
              <Link className="navbar-item px-3 text-light text-decoration-none" to="/about">
                About
              </Link>
              <Link className="navbar-item px-3 text-light text-decoration-none" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item px-3 text-light text-decoration-none" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item px-3 text-light text-decoration-none" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </section>
    )
  }
}

export default Navbar
