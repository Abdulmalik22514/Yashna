import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  images: [],
  error: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
        error: '',
      };
    case actionTypes.FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        images: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
