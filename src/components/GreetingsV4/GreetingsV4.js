import React, { useContext, useState } from 'react';
import LocaleContext from '../LocaleContext';
import Row from '../Row';
import ThemeContext from '../ThemeContext';
import useDocumentTitle from './useDocumentTitle';
import useWindowWidth from './useWindowWidth';

/**
 * Statefull functional component with custom components
 */
const GreetingsV4 = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(name, surname);

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
      <Row label="Width">{width}px</Row>
    </section>
  );
};

export default GreetingsV4;
