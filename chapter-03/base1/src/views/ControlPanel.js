import React,  { Component } from 'react';
import Counter2 from './CounterContainer';
import Summary from './Summary'

const ThemeContext = React.createContext('light');
function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}
// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton>asdfs</ThemedButton>
    </div>
  );
}

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark1">
      <Toolbar />
      <div style={style}>
        <Counter2 caption="First" />
        <Counter2 caption="Second" />
        <Counter2 caption="Third" />
        <hr/>
        <Summary/>
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default ControlPanel;

