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

export const fetchImageSuccess = () => {
  return {
    type: FETCH_IMAGE_SUCCESS,
  };
};

export const fetchImageFailure = () => {
  return {
    type: FETCH_IMAGE_FAILURE,
  };
};
