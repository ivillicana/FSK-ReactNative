import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAhBiZ4d3vmSrVGLKzlTRwfNMNW6HzeFZQ',
      authDomain: 'fskeeper-44ef4.firebaseapp.com',
      databaseURL: 'https://fskeeper-44ef4.firebaseio.com',
      projectId: 'fskeeper-44ef4',
      storageBucket: 'fskeeper-44ef4.appspot.com',
      messagingSenderId: '530968158926',
      appId: '1:530968158926:web:7fee044c77aa6513'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
