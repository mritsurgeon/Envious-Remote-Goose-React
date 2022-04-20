import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links-text">
        {props.text}
      </Link>
      <Link to="/features" className="navigation-links-navlink">
        {props.text1}
      </Link>
      <Link to="/pricing" className="navigation-links-navlink1">
        {props.text2}
      </Link>
      <Link to="/signup" className="navigation-links-navlink2">
        {props.text3}
      </Link>
      <span className="navigation-links-text1">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text: 'About',
  text1: 'Features',
  text2: 'Pricing',
  text3: 'Sign Up',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
