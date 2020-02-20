import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <span>Skills</span>
        </Link>

        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <span>About</span>
        </Link>
      </div>
    );
  }
}
export default Navbar;
