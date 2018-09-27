import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

Header.defaultProps = {
  title: 'Welcome'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}