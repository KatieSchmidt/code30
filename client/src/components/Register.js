import React, { Component } from "react";
import { registerUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    console.log("DOne");
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register__component">
        <h1>Register</h1>
        <form className="register__form">
          <input
            type="text"
            name="name"
            placeholder="name:"
            error={errors.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email:"
            error={errors.email}
          />
          <input
            type="text"
            name="password"
            placeholder="password:"
            error={errors.password}
          />
          <input
            type="text"
            name="password2"
            placeholder="password2:"
            error={errors.password2}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { registerUser }
)(withRouter(Register));
