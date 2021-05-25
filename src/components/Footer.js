import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p><ul className="icons">
            <li>
              <a href="https://www.facebook.com/JwDetailAndValet/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jwdetailandvalet/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li></ul></p>
            <p className="copyright">&copy;Jamie Williams Design</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
