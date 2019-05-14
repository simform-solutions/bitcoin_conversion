import DASHBOARD_TYPE from "./dashboardTypes";

export const defaults = {
  convert_value: 0,
  amount: 0,
  symbol: null
};

export default function dashboardReducer(state = defaults, action) {
  switch (action.type) {
    case DASHBOARD_TYPE.CONVERT_TO_BTC: {
      return {
        ...state,
        convert_value: action.payload
      };
    }

    case DASHBOARD_TYPE.AMOUNT: {
      return {
        ...state,
        amount: action.payload
      };
    }

    case DASHBOARD_TYPE.SYMBOL: {
      return {
        ...state,
        symbol: action.payload
      };
    }

    default:
      return state;
  }
}
