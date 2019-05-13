import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ReportsReducer from './ReportsReducer';
import ReportsFormReducer from './ReportsFormReducer';

export default combineReducers({
  auth: AuthReducer,
  reports: ReportsReducer,
  reportsForm: ReportsFormReducer
});
