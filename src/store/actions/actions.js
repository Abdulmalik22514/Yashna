import axios from 'axios';
import {
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
} from './actionTypes';

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

export const fetchImageRequest = () => ({
  type: FETCH_IMAGE_REQUEST,
});

export const fetchImageSuccess = images => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: images,
});

export const fetchImageFailure = error => ({
  type: FETCH_IMAGE_FAILURE,
  payload: error,
});

export const fetchImages = () => {
  return dispatch => {
    dispatch(fetchImageRequest);
    axios
      .get(apiUrl)
      .then(res => {
        console.log(res.data);
        dispatch(fetchImageSuccess());
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchImageFailure(error));
      });
  };
};
