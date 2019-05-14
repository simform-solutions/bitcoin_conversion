import React, { Component } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store/index";

import { Layout } from "antd";

import PublicOnlyRoute from "./router/PublicOnlyRoute";
import PrivateRoute from "./router/PrivateRoute";
import history from "./router/history";

import Auth from "./views/Auth";
import Main from "./views/Main";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PublicOnlyRoute
              path="/auth"
              component={props => <Auth {...props} />}
            />
            <PrivateRoute
              path="/app"
              component={props => (
                <Layout className="layout">
                  <Content>
                    <Main {...props} />
                  </Content>
                </Layout>
              )}
            />
            <Route component={() => <Redirect to="/app/dashboard" />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
