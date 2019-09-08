import PropTypes from 'prop-types';
import React from 'react';
import Row from '../Row';

/**
 * Stateless functional component with name as prop
 */
const Greetings = ({ name }) => {
  return (
    <section>
      <Row label="Name">{name}</Row>
    </section>
  );
};

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greetings;
