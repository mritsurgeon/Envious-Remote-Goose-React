import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Envious Remote Goose</title>
        <meta property="og:title" content="Pricing - Envious Remote Goose" />
      </Helmet>
      <NavigationLinks rootClassName="navigation-links-root-class-name10"></NavigationLinks>
      <div className="pricing-pricing">
        <div className="pricing-container01">
          <div className="pricing-pricing-card">
            <span className="pricing-text">Basic</span>
            <div className="pricing-container02">
              <span className="pricing-text01">
                <span>R</span>
              </span>
              <span className="pricing-text03">60</span>
              <span className="pricing-text04">
                <span>Per user/ monthly</span>
              </span>
            </div>
            <span className="pricing-text06">
              <span>Billed annualy or month-to-month.</span>
              <span></span>
            </span>
            <div className="pricing-container03">
              <span className="pricing-text09">
                <span>✔ 0-500 usersl</span>
              </span>
              <span className="pricing-text11">
                <span>✔ Storage 5TB</span>
              </span>
              <span className="pricing-text13">
                <span>✔ 90 days Retention</span>
              </span>
              <span className="pricing-text15">
                <span>
                  ✔ Full Features
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <Link to="/signup" className="pricing-navlink button">
              Sign Up
            </Link>
          </div>
          <div className="pricing-pricing-card1">
            <span className="pricing-text17">Comercial</span>
            <div className="pricing-container04">
              <span className="pricing-text18">
                <span>R</span>
              </span>
              <span className="pricing-text20">30</span>
              <span className="pricing-text21">
                <span>Per user/ monthly</span>
              </span>
            </div>
            <span className="pricing-text23">
              <span>Billed annualy or month-to-month.</span>
              <span></span>
            </span>
            <div className="pricing-container05">
              <span className="pricing-text26">
                <span>✔ 500-5000 users</span>
                <span></span>
              </span>
              <span className="pricing-text29">
                <span>✔ Storage Unlimited*</span>
              </span>
              <span className="pricing-text31">
                <span>✔ 180 days Retention</span>
              </span>
              <span className="pricing-text33">
                <span>
                  ✔ Full Features
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <Link to="/signup" className="pricing-navlink1 button">
              Sign Up
            </Link>
          </div>
          <div className="pricing-pricing-card2">
            <span className="pricing-text35">Enterprise</span>
            <div className="pricing-container06">
              <span className="pricing-text36">
                <span>R</span>
              </span>
              <span className="pricing-text38">25</span>
              <span className="pricing-text39">
                <span>Per user/ monthly</span>
              </span>
            </div>
            <span className="pricing-text41">
              <span>Billed annualy or month-to-month.</span>
              <span></span>
            </span>
            <div className="pricing-container07">
              <span className="pricing-text44">
                <span>✔ 5000+ users</span>
                <span></span>
              </span>
              <span className="pricing-text47">
                <span>✔ Storage Unlimited*</span>
              </span>
              <span className="pricing-text49">
                <span>✔ Unlimited Retention</span>
              </span>
              <span className="pricing-text51">
                <span>
                  ✔ Full Features
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <Link to="/signup" className="pricing-navlink2 button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="pricing-pricing1">
        <div className="pricing-container08">
          <div className="pricing-container09"></div>
          <div className="pricing-container10">
            <div className="pricing-container11">
              <div className="pricing-container12"></div>
            </div>
            <span className="pricing-text53">
              Unlimited Storage is in accordance with a fair usage policy on
              acceptable change and growth.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
