import _ from "lodash";
import types from "../../actions/types_d";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case types.SET_NEW_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.SET_UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case types.SET_DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
