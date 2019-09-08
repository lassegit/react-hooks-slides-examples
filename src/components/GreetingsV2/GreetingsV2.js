import React, { useContext, useState } from 'react';
import LocaleContext from '../LocaleContext';
import Row from '../Row';
import ThemeContext from '../ThemeContext';

/**
 * Statefull functional component with useContext
 */
const GreetingsV2 = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);

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
      <Row label="Theme">{theme}</Row>
      <Row label="Locale">{locale}</Row>
    </section>
  );
};

export default GreetingsV2;
