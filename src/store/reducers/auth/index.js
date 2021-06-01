import types from "../../actions/types_d";

const INITIAL_STATE = {
  isSignedIn: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER_SIGN_IN:
      return { ...state, isSignedIn: true };
    case types.SET_USER_SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
