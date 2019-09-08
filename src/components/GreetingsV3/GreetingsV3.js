import React, { useContext, useEffect, useState } from 'react';
import LocaleContext from '../LocaleContext';
import Row from '../Row';
import ThemeContext from '../ThemeContext';

/**
 * Statefull functional component with useEffect for updating side effects
 */
const GreetingsV3 = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const [width, setWidth] = useState(() => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return window.innerWidth;
  });
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  useEffect(() => {
    document.title = `${name} ${surname}`;
  }, [name, surname]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

export default GreetingsV3;
