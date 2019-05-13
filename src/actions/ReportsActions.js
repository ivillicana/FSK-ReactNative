import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  REPORTS_FETCH_SUCCESS,
  REPORT_CREATE,
  REPORT_FORM_FIELD_UPDATE
} from './types';

export const reportFormFieldUpdate = ({ prop, value }) => {
  return {
    type: REPORT_FORM_FIELD_UPDATE,
    payload: { prop, value }
  };
};

export const reportCreate = (report) => {
  const { currentUser } = firebase.auth();
  const { publications, videos, hours, rvs, studies, comments, month, year } = report;

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/reports`)
    .push({ publications, videos, hours, rvs, studies, comments, month, year })
    .then(() => {
      dispatch({ type: REPORT_CREATE });
      Actions.reportsList({ type: 'reset' });
    });
  };
};

export const reportsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/reports`)
      .on('value', snapshot => {
        dispatch({ type: REPORTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
