import reducer, { defaults } from "./dashboardReducer";
import types from "./dashboardTypes";

describe("dashboard reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(defaults);
  });

  it("should handle CONVERT_TO_BTC action", () => {
    expect(
      reducer(
        { ...defaults },
        {
          type: types.CONVERT_TO_BTC,
          payload: 1000
        }
      )
    ).toEqual({
      ...defaults,
      convert_value: 1000
    });
  });

  it("should handle AMOUNT action", () => {
    expect(
      reducer(
        { ...defaults },
        {
          type: types.AMOUNT,
          payload: 200
        }
      )
    ).toEqual({
      ...defaults,
      amount: 200
    });
  });

  it("should handle SYMBOL action", () => {
    expect(
      reducer(
        { ...defaults },
        {
          type: types.SYMBOL,
          payload: "USD"
        }
      )
    ).toEqual({
      ...defaults,
      symbol: "USD"
    });
  });
});
