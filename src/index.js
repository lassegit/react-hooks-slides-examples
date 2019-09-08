import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-enroute';
import Greetings from './components/Greetings';
import GreetingsV1 from './components/GreetingsV1';
import GreetingsV2 from './components/GreetingsV2';
import GreetingsV3 from './components/GreetingsV3';
import GreetingsV4 from './components/GreetingsV4';
import LocaleContext from './components/LocaleContext';
import ThemeContext from './components/ThemeContext';
import './main.css';

const location = typeof window !== 'undefined' ? window.location.pathname : '/';
const locale = typeof window !== 'undefined' ? window.navigator.languages[1] : 'en_US';

ReactDOM.render(
  <LocaleContext.Provider value="dark">
    <ThemeContext.Provider value={locale}>
      <Router location={location}>
        <Route path="/" component={() => <Greetings name="Mary" />} />
        <Route path="/v1" component={GreetingsV1} />
        <Route path="/v2" component={GreetingsV2} />
        <Route path="/v3" component={GreetingsV3} />
        <Route path="/v4" component={GreetingsV4} />
      </Router>
    </ThemeContext.Provider>
  </LocaleContext.Provider>,
  document.getElementById('root'),
);
