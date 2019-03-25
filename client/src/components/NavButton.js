import React, { Component } from "react";
import Navigation from "./Navigation";

export default class NavButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }
  render() {
    let navButton;
    let navigation;
    if (this.state.open === true) {
      navButton = <i className="fas fa-times" />;
      navigation = <Navigation />;
    } else {
      navButton = <i className="fas fa-bars" />;
    }

    return (
      <div className="navigation__component">
        <div className="nav-button" onClick={this.toggleNav}>
          {navButton}
        </div>
        {navigation}
      </div>
    );
  }
}
