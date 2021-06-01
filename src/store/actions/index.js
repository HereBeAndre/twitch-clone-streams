import types from "./types_d";

export const setUserSignIn = (userId) => ({
  type: types.SET_USER_SIGN_IN,
  payload: userId,
});

export const setUserSignOut = () => ({
  type: types.SET_USER_SIGN_OUT,
});
