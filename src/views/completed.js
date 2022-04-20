import React from 'react'

import { Helmet } from 'react-helmet'

import './completed.css'

const Completed = (props) => {
  return (
    <div className="completed-container">
      <Helmet>
        <title>Completed - Envious Remote Goose</title>
        <meta property="og:title" content="Completed - Envious Remote Goose" />
      </Helmet>
      <div className="completed-hero">
        <div className="completed-container1">
          <h1 className="completed-text">Process Completed</h1>
          <span className="completed-text1">
            <span>
              <span>Login to Self Service Portal</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button className="completed-button button">Portal Login</button>
        </div>
      </div>
    </div>
  )
}

export default Completed
