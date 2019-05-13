import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { Header } from './components/common';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
