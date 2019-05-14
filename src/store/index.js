import { applyMiddleware, createStore, compose } from "redux";
import { enableBatching } from "redux-batched-actions";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const middleware = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());

  // Add support for Redux Devtools
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
  enableBatching(reducer),
  composeEnhancers(applyMiddleware(...middleware))
);
