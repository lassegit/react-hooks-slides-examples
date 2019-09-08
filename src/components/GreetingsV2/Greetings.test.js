import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsV2 from './GreetingsV2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GreetingsV2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
