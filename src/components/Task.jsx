import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>{ `Seu nome é: ${name}` }</div>
    );
  }
}

Task.propTypes = {
  name: PropTypes.string,
};

Task.defaultProps = {
  name: "React",
};
