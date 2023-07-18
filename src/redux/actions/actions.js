import { API_FAILURE, API_SUCCESS, LOADING } from '../actionTypes';

export const onLoading = (data) => ({
  type: LOADING,
  payload: data,
});

export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

export const apiFailure = (data) => ({
  type: API_FAILURE,
  payload: data,
});
