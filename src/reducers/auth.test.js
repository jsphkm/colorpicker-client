import reducer from './auth';
import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/auth';

describe('authReducer', () => {

  const initialstate = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialstate);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  it('Should set auth token', () => {
    let currentState = {};
    const state = reducer(currentState, {type: SET_AUTH_TOKEN, authToken: 'authToken'});
    expect(state).toEqual({authToken: 'authToken'});
  });
  
  it('Should clear auth token', () => {
    let currentState = {};
    const state = reducer(currentState, {type: CLEAR_AUTH, authToken: 'authToken'});
    expect(state).toEqual({authToken: null, currentUser: null});
  });

  it('Should request auth token', () => {
    let currentState = {};
    const state = reducer(currentState, {type: AUTH_REQUEST});
    expect(state).toEqual({loading: true, error: null});
  });

  it('Should successful get auth token', () => {
    let currentState = {};
    let action = {currentUser: undefined}
    const state = reducer(currentState, {type: AUTH_SUCCESS, action});
    expect(state).toEqual({loading: false, currentUser: action.currentUser});
  });

  it('Should error in getting auth token', () => {
    let currentState = {};
    let action = {error: undefined}
    const state = reducer(currentState, {type: AUTH_ERROR, action});
    expect(state).toEqual({loading: false, error: action.error});
  });
});