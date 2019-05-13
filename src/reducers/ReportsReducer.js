import {
  REPORTS_FETCH_SUCCESS
} from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPORTS_FETCH_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};
