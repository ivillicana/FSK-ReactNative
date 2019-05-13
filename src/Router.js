import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
