import React, { Component, Fragment } from "react";
import logo from "./assets/images/logo-bl.png";
import "./app.css";

import api from "./services/api";

export default class App extends Component {
  state = {
    body: {
      org_id: "Dojot",
      utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
      register_timestamp: 0,
      data: ""
    },
    status: 0
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { body } = this.state;
      body.data = JSON.parse(body.data);
      console.log(body);
      const response = await api.post("/", body);
      console.log(response);
      if (response.status === 200) {
        this.setState({
          status: 200,
          body: {
            org_id: "Dojot",
            utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
            register_timestamp: 0,
            data: ""
          }
        });
      } else {
        this.setState({
          status: 500,
          body: {
            org_id: "Dojot",
            utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
            register_timestamp: 0,
            data: ""
          }
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        status: 500,
        body: {
          org_id: "Dojot",
          utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
          register_timestamp: 0,
          data: ""
        }
      });
    }
  };

  handleChangeText = e => {
    this.setState({
      body: {
        [e.target.name]: e.target.value
      }
    });
  };

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
            <label className="label-wrapper">
              <div className="label">Timestamp</div>
              <input
                type="text"
                value={this.state.body.register_timestamp}
                onChange={this.handleChangeText}
                name="register_timestamp"
              />
            </label>
            <label className="label-wrapper">
              <div className="label">Data</div>
              <input
                type="text"
                value={this.state.body.data}
                onChange={this.handleChangeText}
                name="data"
              />
            </label>
            <button
              className="btn-submit"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              validate
            </button>
          </form>
          <div className="message">
            {this.state.status === 200 && <div className="success">Valid</div>}
            {this.state.status === 500 && <div className="error">Invalid</div>}
          </div>
        </div>
      </Fragment>
    );
  }
}
