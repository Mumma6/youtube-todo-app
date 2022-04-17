import React from "react"
import { Navbar as BootstrapNavbar } from "react-bootstrap"

const Navbar = () => {
  return (
    <BootstrapNavbar>
      <div className="navbar-brand">
        <h3 style={{ color: "white", marginLeft: 20, marginBottom: 0 }}>
          Todo-app
        </h3>
      </div>
    </BootstrapNavbar>
  )
}

export default Navbar
