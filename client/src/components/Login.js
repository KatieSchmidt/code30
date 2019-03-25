import React, { Component } from "react";
import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userInfo, this.props.history);
    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="login__component">
        <h1>Login</h1>
        <form className="login__form" onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email:"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <input
            type="password"
            name="password"
            placeholder="password:"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { loginUser }
)(withRouter(Login));
