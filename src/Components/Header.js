import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
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