import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// components/header.js

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require('../images/avocado-logo.svg')} width="30" />
      </Link>
      <Link to="/courses">Avo Course</Link>
      <Link to="/downloads">Avo Download</Link>
      <Link to="/workshops">Avo Workshops</Link>
      <Link to="/buy">
        <button>Buy Avocado</button>
      </Link>
    </div>
  </div>
)

export default Header
