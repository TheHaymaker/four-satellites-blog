import React, { Component } from 'react';
import { Link } from './index';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick(e) {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const { active } = this.state;
    const activeClass = active ? 'active' : null;
    return (
      <div className="nav-wrapper">
        <div className={`fixed-nav ${activeClass}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`hamburger ${activeClass}`}
          onKeyPress={() => {}}
          onClick={this.handleHamburgerClick}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    );
  }
}

export default Navigation;
