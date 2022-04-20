import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/features" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/pricing" className="navigation-links1-navlink2">
        {props.text2}
      </Link>
      <Link to="/signup" className="navigation-links1-navlink3">
        {props.text3}
      </Link>
      <span className="navigation-links1-text">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text: 'About',
  text1: 'Features',
  text4: 'Blog',
  text2: 'Pricing',
  text3: 'Team',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
