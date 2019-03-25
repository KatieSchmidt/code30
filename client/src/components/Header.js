import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-headings">
          <h1>30 Minutes of Blog</h1>
          <h2>
            A code blog on a time crunch by{" "}
            <a
              href="http://katieschmidt.github.io/new_portfolio"
              className="header-github"
            >
              Katie Schmidt
            </a>
          </h2>
        </div>
      </header>
    );
  }
}
