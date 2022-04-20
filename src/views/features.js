import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard21 from '../components/feature-card21'
import './features.css'

const Features = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>Features - Envious Remote Goose</title>
        <meta property="og:title" content="Features - Envious Remote Goose" />
      </Helmet>
      <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
      <div className="features-features">
        <h1 className="features-text">All these impressive features</h1>
        <div className="features-container1">
          <FeatureCard2
            title="Backup your Microsoft 365 data"
            description="Backup Exchange and SharePoint Online, OneDrive for Business and Teams data with the lowest RPO in the industry – every 5 minutes"
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Safeguard SharePoint &amp; OneDrive for Business"
            description="Protect your SharePoint Online sites, documents, libraries lists and OneDrive for Business accounts, files and folders."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="Protect Microsoft Teams data"
            description="Veeam utilizes Microsoft Teams APIs to provide a purpose‑built backup, enabling full control and protection over this critical data."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="Fast and easy restores for Microsoft 365"
            description="Quick search and granular recovery of individual objects residing in a protected copy of your Microsoft 365 backup."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div className="features-features1">
        <div className="features-container2">
          <FeatureCard21
            title="45 Microsoft 365 restore options"
            description="Restore Microsoft 365 items with the broadest set of recovery options (45). Helping meet your specific recovery needs in only 3 clicks!"
            rootClassName="rootClassName"
          ></FeatureCard21>
          <FeatureCard21
            title="eDiscovery made easy for Microsoft 365"
            description="Leverage powerful search, flexible recovery and export options to perform eDiscovery across your entire Microsoft 365 environment."
            rootClassName="rootClassName3"
          ></FeatureCard21>
          <FeatureCard21
            title="Self‑service restore portal"
            description="Empowers IT administrators to securely delegate restores of emails, files and more!"
            rootClassName="rootClassName2"
          ></FeatureCard21>
          <FeatureCard21
            title="Hybrid support for Microsoft 365 backups"
            description="Streamline data protection with support for your hybrid Microsoft 365 and on premises Exchange and SharePoint environment"
            rootClassName="rootClassName1"
          ></FeatureCard21>
        </div>
      </div>
    </div>
  )
}

export default Features
