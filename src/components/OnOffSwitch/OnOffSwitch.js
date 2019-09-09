import React, { useState } from 'react';

const OnOffSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button onClick={handleClick} type="button" disabled={isActive}>
      {isActive ? 'Yes' : 'No'}
    </button>
  );
};

export default OnOffSwitch;
