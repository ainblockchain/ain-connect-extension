import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';

class GreetingComponent extends Component {
  state = {
    name: 'dev',
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <p>{`Hello, ${name}!`}</p>
        <img src={icon} alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;
