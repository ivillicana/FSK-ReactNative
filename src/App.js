import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Header } from './components/common';

const store = createStore();

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Header headerText="FS Keeper" />
      </Provider>
    );
  }
}

export default App;
