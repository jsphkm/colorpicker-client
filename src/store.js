import {createStore} from 'redux'
import {colorpickerReducer} from './reducers';

export default createStore(
  colorpickerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );