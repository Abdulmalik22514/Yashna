import {
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
} from './actionTypes';

export const fetchImageRequest = () => {
  return {
    type: FETCH_IMAGE_REQUEST,
  };
};

export const fetchImageSuccess = images => {
  return {
    type: FETCH_IMAGE_SUCCESS,
    payload: images,
  };
};

export const fetchImageFailure = error => {
  return {
    type: FETCH_IMAGE_FAILURE,
    payload: error,
  };
};
