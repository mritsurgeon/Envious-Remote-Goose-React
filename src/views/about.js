import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Envious Remote Goose</title>
        <meta property="og:title" content="About - Envious Remote Goose" />
      </Helmet>
      <Link to="/features" className="about-navlink">
        <NavigationLinks
          rootClassName="navigation-links-root-class-name8"
          className="about-component"
        ></NavigationLinks>
      </Link>
      <div className="about-hero">
        <img
          alt="image"
          src="/playground_assets/main%20page%201-1500h.png"
          className="about-image"
        />
        <div className="about-container1">
          <h1 className="about-text">Let’s Protect your Office 365</h1>
          <h2 className="about-text1">Autonomous SaaS Backup Platform</h2>
          <div className="about-btn-group">
            <Link to="/signup" className="about-navlink1 button">
              Get Started
            </Link>
            <Link to="/features" className="about-navlink2 button">
              Features
            </Link>
          </div>
          <span className="about-text2">
            Microsoft 365 has a shared responsibility model, availability is
            guaranteed, however Data generated in the platform is the customer
            responsibility to protect. Take all the headaches involved with
            ensuring you have backups of your companies’ data and consume our
            SaaS backup platform which is easy to use with no need to deploy
            your own infrastructure, we got you !
          </span>
        </div>
      </div>
    </div>
  )
}

export default About
