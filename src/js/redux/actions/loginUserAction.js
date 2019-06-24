import _ from 'lodash';

import accounts from '../../data/accounts.json';

export const LOGINUSER = 'login/LOGINUSER';
export const LOGINERROR = 'login/LOGINERROR';

export const loginUser = (username, password) => {
  const foundAccount = _.find(accounts, account => account.username.toLowerCase() === username.toLowerCase() && 
                                                   account.password === password);

  if(foundAccount) {
    return {
      type: LOGINUSER,
      payload: { username: foundAccount.username }
    };
  }
  else {
    return {
      type: LOGINERROR
    };
  }
};