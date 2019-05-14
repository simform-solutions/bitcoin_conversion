import store from "../index";

import DASHBOARD_TYPE from "./dashboardTypes";

import axios from "axios";

const { dispatch } = store;

export const convert = (amount, currency) => {
  return axios
    .get(`https://blockchain.info/tobtc?currency=${currency}&value=${amount}`)
    .then(result => {
      console.log("get API response", result);
      const { data } = result;

      dispatch({ type: DASHBOARD_TYPE.CONVERT_TO_BTC, payload: data });
      dispatch({ type: DASHBOARD_TYPE.AMOUNT, payload: amount });
      dispatch({ type: DASHBOARD_TYPE.SYMBOL, payload: currency });

      return data;
    })
    .catch(error => {
      console.log(error.response.data);
      return error.response.data;
    });
};
