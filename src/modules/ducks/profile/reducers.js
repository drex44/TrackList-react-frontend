import types from "./types";
import { defaultState } from "./utils";
import { AuthStatus } from "../../../components/authenticate";

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN: {
      let newState = { ...state };
      newState.isLoggedIn = true;
      newState.profile = action.payload.profile;
      newState.sessionToken = action.payload.sessionToken;
      localStorage.setItem("sessionToken", action.payload.sessionToken);
      AuthStatus.changeAuthStatus(true);
      return newState;
    }

    case types.LOGOUT: {
      let newState = { ...state };
      newState.isLoggedIn = false;
      newState.profile = {};
      AuthStatus.changeAuthStatus(false);
      return newState;
    }

    default:
      return state;
  }
};

export default profileReducer;
