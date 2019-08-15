import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <nav>
    <h3>
      <Link to="/about/">About</Link>
    </h3>
    <h3>
      <Link to="/discover/">Discover</Link>
    </h3>
  </nav>
)

export default Navbar
