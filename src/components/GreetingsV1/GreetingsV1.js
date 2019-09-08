import React, { useState } from 'react';
import Row from '../Row';

/**
 * Statefull functional component that accepts user input
 */
const GreetingsV1 = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <section>
      <Row label="Name">
        <input type="text" value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input type="text" value={surname} onChange={handleSurnameChange} />
      </Row>
    </section>
  );
};

export default GreetingsV1;
