import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../Components/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">{title}</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const headingStyle = {
  color: 'green', 
  fontSize: '50px'
}

Header.defaultProps = {
  title: 'Welcome'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}