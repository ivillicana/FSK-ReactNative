import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <Header headerText="FS Keeper" />
    );
  }
}

export default App;
