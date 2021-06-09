import streams from "../../api/streams";
import types from "./types_d";

export const setUserSignIn = (userId) => ({
  type: types.SET_USER_SIGN_IN,
  payload: userId,
});

export const setUserSignOut = () => ({
  type: types.SET_USER_SIGN_OUT,
});

export const createStream = (formValues) => async (dispatch) => {
  streams.post("/streams", formValues);
};
