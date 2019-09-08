import React from 'react';
import LocaleContext from '../LocaleContext';
import Row from '../Row';
import ThemeContext from '../ThemeContext';

export default class GreetingsV2Class extends React.Component {
  // static contextType = ThemeContext; only work with one Context, else put it in HOC
  constructor() {
    super();
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    };
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSurnameChange = e => {
    this.setState({
      surname: e.target.value,
    });
  };

  render() {
    const { name, surname } = this.state;
    return (
      <section>
        <Row label="Name">
          <input type="text" value={name} onChange={this.handleNameChange} />
        </Row>
        <Row label="Surname">
          <input type="text" value={surname} onChange={this.handleSurnameChange} />
        </Row>
        <ThemeContext.Consumer>{theme => <Row label="Theme">{theme}</Row>}</ThemeContext.Consumer>
        <LocaleContext.Consumer>{locale => <Row label="Locale">{locale}</Row>}</LocaleContext.Consumer>
      </section>
    );
  }
}
