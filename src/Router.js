import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ReportsList from './components/ReportsList';
import ReportCreate from './components/ReportCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>

        <Scene key="main">
          <Scene 
          rightTitle="Add"
          onRight={() => Actions.reportCreate()}
          key="reportsList" 
          component={ReportsList} 
          title="Service Reports" 
          initial
          />
          <Scene
            key="reportCreate"
            component={ReportCreate} 
            title="Create Report"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
