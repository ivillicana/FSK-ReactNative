import {
  REPORT_CREATE,
  REPORT_FORM_FIELD_UPDATE 
} from '../actions/types';

const INITIAL_STATE = {
  publications: '',
  videos: '',
  hours: '',
  rvs: '',
  studies: '',
  comments: ''
};

export default (state = INITIAL_STATE, action) => {
  // action.payload === { prop: 'name', value: 'Jane Doe' }
  switch (action.type) {
    case REPORT_FORM_FIELD_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value }; 
    case REPORT_CREATE:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
