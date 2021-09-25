import { USER_TYPES } from "../types";
const userReducers = (state = [], action) => {
  switch (action.type) {
    case USER_TYPES.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default userReducers;
