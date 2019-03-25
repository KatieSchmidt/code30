import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../actions/authActions";

import Posts from "./Posts";
import CreatePost from "./CreatePost";

class Dashboard extends Component {
  onLogoutClick(e) {
    this.props.logoutUser();
  }

  render() {
    const { user } = this.props;

    return (
      <div className="dashboard">
        <h1 className="dashboard__welcome">Welcome {user.name}</h1>
        <button
          className="logout__button"
          onClick={this.onLogoutClick.bind(this)}
        >
          Logout
        </button>
        <CreatePost />
        <Posts />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Dashboard));
