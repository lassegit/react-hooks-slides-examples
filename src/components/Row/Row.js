import PropTypes from 'prop-types';
import React from 'react';
import './row.css';

const Row = ({ label, children }) => (
  <div className="row">
    <div className="label">{label}</div>
    <div className="children">{children}</div>
  </div>
);

Row.defaultProps = {
  label: '',
};

Row.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Row;
