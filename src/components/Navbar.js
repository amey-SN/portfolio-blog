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
        className="navbar navbar-nav navbar-light p-0"
        role="navigation"
        aria-label="main-navigation" >
        <div className="container mb-0">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}      >
            <div className="navbar-start ">
            <Link to="/" className="navbar-item text-decoration-none" >
              Home
            </Link>
              <Link className="navbar-item p-3 text-decoration-none" to="/about">
                About
              </Link>
              <Link className="navbar-item p-3 text-decoration-none" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item p-3 text-decoration-none" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item p-3 text-decoration-none" to="/contact">
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
