import React, { Component, Fragment } from "react";
import logo from "./assets/images/logo-bl.png";
import "./app.css";

import api from "./services/api";
import MyInput from "./components/MyInput";

export default class App extends Component {
  state = {
    body: {
      org_id: "Dojot",
      utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
      register_timestamp: "",
      data: ""
    },
    status: 0
  };

  handleSubmit = async e => {
    e.preventDefault();
		console.log('This is the right one');
    try {
      const body = {...this.state.body};
      body.data = JSON.parse(body.data);
			body.register_timestamp = parseInt(body.register_timestamp);
      console.log(body);
			await this.setState({status: 0})
      const response = await api.post("/", body);
      console.log(response);
      if (response.status === 200) {
        this.setState({ status: 200 }, () => {
					setTimeout(() => {this.setState({status: 0})}, 2500);
				});
//        this.setState({
//          status: 200,
//          body: {
//            org_id: "Dojot",
//            utility_token: "16dfc0b0-2fa6-11e9-a313-67182eaaf62a",
//            register_timestamp: "",
//            data: ""
//          }
//        });
      } else {
//        this.setState({ status: 500 });
        this.setState({ status: 500 }, () => {
					setTimeout(() => {this.setState({status: 0})}, 2500);
				});
      }
    } catch (error) {
      console.log(error);
//      this.setState({ status: 500 });
        this.setState({ status: 500 }, () => {
					setTimeout(() => {this.setState({status: 0})}, 2500);
				});
    }
  };

  handleChangeText = e => {

		let fieldName = e.target.name;
		let fieldValue = e.target.value;
//		if(fieldName === 'register_timestamp') {
//				fieldValue = parseInt(fieldValue);
//		}

    this.setState({
      body: {
        ...this.state.body,
        [fieldName]: fieldValue,
      }
    });
  };

  render() {
		console.log('This is the new one');
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
            <MyInput
              type={"text"}
              name={"register_timestamp"}
              placeholder={"Timestamp"}
              value={this.state.body.register_timestamp}
              change={this.handleChangeText}
            />

            <MyInput
              type={"text"}
              name={"data"}
              placeholder={"Data"}
              value={this.state.body.data}
              change={this.handleChangeText}
            />
            <button
              className="outline-btn btn-color-green"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              validar
            </button>
          </form>
          <div className="message">
            {this.state.status === 200 && (
              <div className="success">Dados Válidos</div>
            )}
            {this.state.status === 500 && (
              <div className="error">Dados Inválidos</div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
