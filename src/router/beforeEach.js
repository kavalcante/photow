import store from '../vuex';

export const isProtectedRoute = (route, path) => route.path.indexOf(path) !== -1;
export const isLogged = () => store.getters.isLogged;
export const login = '/';

export default (to, from, next) => {
  if (isProtectedRoute(to, '/home') && !isLogged()) {
    next(login);
    return;
  }

  next();
};
