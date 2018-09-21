import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import mainReducer from './reducers';

const store = createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;