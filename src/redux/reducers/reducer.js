import { LOADING, API_SUCCESS, API_FAILURE } from '../actionTypes';

const initialState = {
  loading: false,
  error: null,
  panorbitData: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case API_SUCCESS:
      return { ...state, loading: false, panorbitData: action.payload };
    case API_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
