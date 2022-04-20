import React from 'react'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>Sign up - Envious Remote Goose</title>
        <meta property="og:title" content="Sign up - Envious Remote Goose" />
      </Helmet>
      <input
        type="text"
        placeholder="placeholder"
        className="signup-name input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="signup-company input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="signup-contact-email input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="signup-contact-phone-number input"
      />
      <input
        type="text"
        placeholder="placeholder"
        className="signup-o365-admin-email input"
      />
      <span className="signup-text">Name</span>
      <span className="signup-text1">Plan</span>
      <span className="signup-text2">Company</span>
      <span className="signup-text3">Contact Email</span>
      <span className="signup-text4">Contact Phone</span>
      <span className="signup-text5">O365 Admin Email</span>
      <select className="signup-select">
        <option value="Basic" selected>
          Basic
        </option>
        <option value="Commercial">Commercial</option>
        <option value="Enterprise">Enterprise</option>
      </select>
      <h1 className="signup-text6">
        Check Out
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </h1>
      <div className="signup-container1"></div>
      <svg viewBox="0 0 1024 1024" className="signup-icon">
        <path d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"></path>
        <path d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"></path>
        <path d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"></path>
      </svg>
      <button className="signup-button button input">Submit</button>
    </div>
  )
}

export default Signup
