import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "antd";
class Conversation extends Component {
  componentDidMount() {
    const { amount, history } = this.props;
    if (amount === 0) {
      history.push("/app/dashboard");
    }
  }

  render() {
    const { convert_value, amount, symbol } = this.props;
    return (
      <Fragment>
        <p className="convert_value">
          <Link to="/app/dashboard">
            <Icon type="arrow-left" /> Back to dashboard
          </Link>
          <br />
          For {amount} {symbol} converted bitcoin value is {convert_value}
        </p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { convert_value, amount, symbol } = state.dashboard;

  return {
    convert_value,
    amount,
    symbol
  };
};

export default connect(mapStateToProps)(Conversation);
