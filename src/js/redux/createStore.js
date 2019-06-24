import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import loginReducer from './reducers/loginReducer';
import searchReducer from './reducers/searchReducer';
import historyReducer from './reducers/historyReducer';

const combinedReducers = combineReducers({
  login: loginReducer,
  search: searchReducer,
  history: historyReducer
});

export const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());