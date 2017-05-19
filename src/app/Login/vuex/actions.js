import * as types from './mutations-types';
import login from '../../../firebase';
import provider from '../../../auth';

export const attemptLogin = context =>
login.auth().signInWithPopup(provider)
.then((res) => {
  context.commit(types.setToken, res.credential.accessToken);
  context.commit(types.setUser, res.user);
});

export const attemptLogout = (context) => {
  context.commit(types.logoutUser);
};

export default attemptLogin;
