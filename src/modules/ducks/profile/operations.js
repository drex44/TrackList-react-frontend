import actions from "./actions";
import { API, Services } from "../../utils";

const login = profile => {
  return function(dispatch) {
    API.post(Services.authenticate, { tokenId: profile.tokenId }).then(res => {
      dispatch(actions.login(profile, res.data.sessionToken));
    });
  };
};

const logout = () => {
  return function(dispatch) {
    dispatch(actions.logout());
  };
};

export default {
  login,
  logout
};
