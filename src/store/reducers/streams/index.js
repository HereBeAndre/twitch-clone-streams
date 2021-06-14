import types from "../../actions/types_d";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_SET_ALL_STREAMS:
      return {};
    case types.SET_NEW_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.SET_UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.SET_DELETE_STREAM:
      return {};
    default:
      return state;
  }
};
