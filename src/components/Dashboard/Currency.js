import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Button, Select, InputNumber } from "antd";
import { convert } from "./../../store/actions";
const Option = Select.Option;

const currencyList = [
  { name: "USD" },
  { name: "JPY" },
  { name: "CNY" },
  { name: "SGD" },
  { name: "HKD" },
  { name: "CAD" },
  { name: "NZD" },
  { name: "AUD" },
  { name: "CLP" },
  { name: "GBP" },
  { name: "DKK" },
  { name: "SEK" },
  { name: "ISK" },
  { name: "CHF" },
  { name: "BRL" },
  { name: "EUR" },
  { name: "RUB" },
  { name: "PLN" },
  { name: "THB" },
  { name: "KRW" },
  { name: "TWD" }
];

class Currency extends Component {
  state = {
    loading: false
  };

  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });

        convert(values.amount, values.currency)
          .then(data => {
            this.setState({ loading: false });
            history.push("/app/conversation");
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Amount">
            {getFieldDecorator("amount", {
              initialValue: 1000,
              rules: [
                {
                  required: true,
                  message: "please input the amount"
                }
              ]
            })(<InputNumber size="large" min={1} />)}
          </Form.Item>

          <Form.Item label="Currency">
            {getFieldDecorator("currency", {
              rules: [
                {
                  required: true,
                  message: "please select a currency"
                }
              ]
            })(
              <Select
                showSearch={true}
                size="large"
                style={{ width: "100%" }}
                placeholder="Select currency"
              >
                {currencyList.map((list, key) => {
                  return (
                    <Option value={list.name} key={key}>
                      {list.name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={loading}
            >
              Convert {loading ? <Icon type="loading" /> : null}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "Currency_Select" })(Currency);
