import React, { Component } from 'react';
import MenuOrder from './components/MenuOrder';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div>
        <MenuOrder />
        {process.env.NODE_EVN === 'development' && <DevTools />}
      </div>
    );
  }
}

export default App;
