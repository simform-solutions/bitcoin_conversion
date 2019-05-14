import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../router/PrivateRoute";

import Dashboard from "./Dashboard";
import Conversation from "./Conversation";

export default class Main extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className="app-content">
        <Switch>
          <PrivateRoute
            path={`${match.path}/dashboard`}
            component={Dashboard}
          />
          <PrivateRoute
            path={`${match.path}/conversation`}
            component={Conversation}
          />
        </Switch>
      </div>
    );
  }
}
