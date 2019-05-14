import React from "react";
import { Redirect, Switch } from "react-router-dom";
import PublicOnlyRoute from "../router/PublicOnlyRoute";
import LoginCard from "../components/Auth/Login";
import bitcoin from "./../images/bit_coin.png";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background: `url(${bitcoin}) no-repeat center center fixed`,
  backgroundSize: "cover",
  flexDirection: "column",
  height: "100vh"
};

const Auth = props => {
  const { match } = props;

  return (
    <div className="login-container" style={style}>
      <Switch>
        <PublicOnlyRoute path={`${match.path}/login`} component={LoginCard} />
        <PublicOnlyRoute component={() => <Redirect to="/auth/login" />} />
      </Switch>
    </div>
  );
};

export default Auth;
