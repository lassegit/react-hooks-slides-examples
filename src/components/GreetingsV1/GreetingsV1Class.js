import React from 'react';
import Row from '../Row';

export class GreetingsV1Class extends React.Component {
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
      </section>
    );
  }
}
