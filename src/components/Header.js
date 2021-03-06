import PropTypes from 'prop-types'
import React from 'react'
import jwlogo from '../images/logo.png'
import jwlogo2 from '../images/logo2.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon"><img src={jwlogo2} alt="" /></span>
    </div>
    <div className="content">
      <div className="inner">
      <img src={jwlogo} alt="" />
        <p>
          Attention to detail is what we do
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('faq')
            }}
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('gallery')
            }}
          >
            Gallery
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
