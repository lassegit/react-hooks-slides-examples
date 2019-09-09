import React from 'react';

export default class OnOffSwitchClass extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    const { isActive } = this.state;

    return (
      <button onClick={this.handleClick} type="button">
        {isActive ? 'Yes' : 'No'}
      </button>
    );
  }
}
