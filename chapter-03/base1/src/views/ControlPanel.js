import React, { Component } from 'react';
import Counter2 from './CounterContainer';
import Summary from './Summary'
const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter2 caption="First" />
        <Counter2 caption="Second" />
        <Counter2 caption="Third" />
        <hr/>
        <Summary/>
      </div>
    );
  }
}

export default ControlPanel;

