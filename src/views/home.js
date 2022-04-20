import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Envious Remote Goose</title>
        <meta property="og:title" content="Envious Remote Goose" />
      </Helmet>
      <div className="home-hero">
        <img
          alt="logo"
          src="/playground_assets/capture-200h.png"
          className="home-image"
        />
        <header data-role="Accordion" className="home-header">
          <div className="home-separator"></div>
          <nav className="home-nav">
            <Link to="/features">
              <NavigationLinks1
                text3="Get Started"
                rootClassName="rootClassName19"
                className="home-component"
              ></NavigationLinks1>
            </Link>
          </nav>
          <div data-type="AccordionHeader" className="home-accordion-header">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="AccordionContent" className="home-accordion-content">
            <div className="home-nav1">
              <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
            </div>
          </div>
        </header>
        <h1 className="home-text">Backup For Office 365 As A Service</h1>
        <span className="home-text1">
          Fully Autonomous SaaS Backup Solution fro protecting your companies
          critical data in Microsoft office 365
        </span>
        <div className="home-btn-group">
          <Link to="/signup" className="home-navlink1 button">
            Get Started
          </Link>
          <Link to="/about" className="home-navlink2 button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
