import React, { Component } from "react";
import { Row, Col } from "antd";

import Currency from "./../components/Dashboard/Currency";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_root">
        <Row type="flex" justify="space-around">
          <Col span={16}>
            <p className="welcome_note">
              Hello, {window.localStorage.getItem("bitcoin_conversion")} which
              currency you'd like to use to convert from today's Bitcoin value
            </p>
          </Col>
          <Col span={16}>
            <Currency {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}
