import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POST_ERROR = 'AUTH_ERROR';
export const postError = error => ({
  type: POST_ERROR,
  error
});

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    const {reason, message, location} = err;
    dispatch(postError(err));
    if (reason === 'ValidationError') {
      // return Promise.reject(
        throw new SubmissionError({
          [location]: message
        })
      // );
    }
  });
};