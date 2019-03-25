import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__text">
          Contact{" "}
          <a
            href="https://katieschmidt.github.io/new_portfolio"
            className="footer__text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Katie Schmidt
          </a>
        </p>
      </footer>
    );
  }
}
