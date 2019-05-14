import store from "../index";

import AUTH_TYPE from "./AuthTypes";

export const login = payload => {
  // Will call login API call when we've API ready.
  window.localStorage.setItem("bitcoin_conversion", payload);

  return true;
};
