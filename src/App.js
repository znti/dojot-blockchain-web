import React, { Component, Fragment } from "react";
import logo from "./assets/images/logo-bl.png";
// import "./app.css";

// import Input from "./components/input";
import api from "./services/api";

export default class App extends Component {
  state = {
    body: {
      org_id: "Dojot",
      utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
      register_timestamp: 1550072671569,
      data: { temperature: 176.5, light: 353.76 }
    },
    status: 200
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { body } = this.state;
      body.data = JSON.parse(JSON.stringify(body.data));
      console.log(body);
      const response = await api.post("/", body);
      console.log(response);
      if (response.status === 200) {
        this.setState({ status: 200 });
      } else {
        this.setState({ status: 500 });
      }
    } catch (error) {
      console.log(error);
      this.setState({ status: 500 });
    }
  };

  handleChangeText = e => {};

  render() {
    return (
      <Fragment>
        <div className="header-whapper">
          <img
            className="header-logo"
            height={60}
            src={logo}
            alt="dojot logo"
          />
        </div>
        <div className="form-wrapper">
          <form className="form-content">
            <input
              type="text"
              value={this.state.body.register_timestamp}
              onChange={this.handleChangeText}
            />
            <input
              type="text"
              value={this.state.body.register_timestamp}
              onChange={this.handleChangeText}
            />
            <button
              className="btn-submit"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              validate
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
