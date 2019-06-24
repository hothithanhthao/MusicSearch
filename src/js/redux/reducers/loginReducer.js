import { fromJS } from 'immutable';

import { LOGINUSER, LOGINERROR } from '../actions/loginUserAction';
import { LOGOUTUSER } from '../actions/logoutUserAction';

const defaultState = {
  loggedIn: false,
  username: null,
  loginError: null
}

const loginReducer = (state = fromJS(defaultState), action) => {
  switch(action.type) {
    case LOGINUSER:
      return state.set('loggedIn', true)
                  .set('username', action.payload.username)
                  .set('loginError', null);
                  

    case LOGINERROR:
      return state.set('loggedIn', false)
                  .set('username', null)
                  .set('loginError', 'Incorrect username and/or password');

    case LOGOUTUSER:
      return state.set('loggedIn', false)
                  .set('username', null)
                  .set('loginError', null)
      
    default:
      return state;
  }
};

export default loginReducer;