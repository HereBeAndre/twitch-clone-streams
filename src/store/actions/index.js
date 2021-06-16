import streams from "../../api/streams";
import types from "./types_d";

export const setUserSignIn = (userId) => ({
  type: types.SET_USER_SIGN_IN,
  payload: userId,
});

export const setUserSignOut = () => ({
  type: types.SET_USER_SIGN_OUT,
});

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const res = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: types.SET_NEW_STREAM, payload: res.data });
  // Redirect user to list of streams
};

export const getSetAllStreams = () => async (dispatch) => {
  const res = await streams.get("streams");
  dispatch({ type: types.GET_ALL_STREAMS, payload: res.data });
};

export const getStream = (streamId) => async (dispatch) => {
  const res = await streams.get(`/streams/${streamId}`);
  dispatch({ type: types.GET_STREAM, payload: res.data });
};

export const setUpdateStream = (streamId, formValues) => async (dispatch) => {
  const res = await streams.put(`/streams/${streamId}`, formValues);
  dispatch({ type: types.SET_UPDATE_STREAM, payload: res.data });
};

export const setDeleteStream = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({ type: types.SET_DELETE_STREAM, payload: streamId });
};
