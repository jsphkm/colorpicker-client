import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_BOX = 'ADD_BOX';
export const addBox = () => ({
  type: ADD_BOX
})

export const REMOVE_BOX = 'REMOVE_BOX';
export const removeBox = colorOptions => ({
  type: REMOVE_BOX,
  colorOptions
})

export const CHECKED_BOX = 'CHECKED_BOX';
export const checkedBox = colorOptions => ({
  type: CHECKED_BOX,
  colorOptions
})

export const HUE_CHANGE = 'HUE_CHANGE';
export const hueChanged = data => ({
  type: HUE_CHANGE,
  hueValue: data.hueValue,
  colorIndex: data.colorIndex
})

export const SATURATION_CHANGE = 'SATURATION_CHANGE';
export const saturationChanged = data => ({
  type: SATURATION_CHANGE,
  saturationValue: data.saturationValue,
  colorIndex: data.colorIndex
})

export const LIGHTNESS_CHANGE = 'LIGHTNESS_CHANGE';
export const lightnessChanged = data => ({
  type: LIGHTNESS_CHANGE,
  lightnessValue: data.lightnessValue,
  colorIndex: data.colorIndex
})

export const RENDER_ONE_PALETTE = 'RENDER_ONE_PALETTE';
export const renderOnePalette = data => ({
  type: RENDER_ONE_PALETTE,
  fetchedpalette: data
})

export const getOnePalette = data => dispatch => {
  const {authToken, id} = data;
  return fetch(`${API_BASE_URL}/api/palettes/${id}`, {
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
    const {reason} = err;
    if (reason === 'ValidationError') {
      return Promise.reject();
    }
  })
}