import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <h2>
      <Link to="/">About</Link>
    </h2>
  </nav>
)

export default Navbar
