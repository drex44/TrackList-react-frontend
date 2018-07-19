import types from "./types";

const login = (profile, sessionToken) => ({
  type: types.LOGIN,
  payload: { profile: profile, sessionToken: sessionToken }
});

const logout = () => ({
  type: types.LOGOUT
});

export default {
  login,
  logout
};
