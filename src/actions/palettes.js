import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const RENDER_PALETTES = 'RENDER_PALETTES';
export const renderPalettes = data => ({
  type: RENDER_PALETTES,
  palettes: data
})

export const postPalette = (data) => dispatch => {
  const {authToken, colors} = data;
  console.log(typeof colors[0].color.hue);
  return fetch(`${API_BASE_URL}/palettes`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'content-type': 'application/json'
    },
    body: JSON.stringify({colors: colors})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    res.json();
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      return Promise.reject();
    }
  });
};

export const getPalettes = (authToken) => dispatch => {
  return fetch(`${API_BASE_URL}/palettes`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + authToken
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    return res.json();
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      return Promise.reject();
    }
  });
};