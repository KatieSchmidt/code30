import React, { Component } from "react";
import { createPost } from "../actions/postActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";

import Timer from "./Timer";

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      post: "",
      posted: false,
      start: 30,
      started: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setTimerStart = this.setTimerStart.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //start the timer when you click the input box. If you havent submitted by 30 minutes, it will submit it for you and reset state. if you have submitted it with the sumit butten, the submit event will change the posted state to true and it wont be submitted again here.
  setTimerStart() {
    const halfHour = 1800000;
    this.setState({
      started: true
    });
    setTimeout(() => {
      const newPost = {
        title: this.state.title,
        post: this.state.post
      };
      if (this.state.posted === false) {
        this.props.createPost(newPost, this.props.history);
        this.setState({
          title: "",
          post: "",
          started: false
        });
      } else {
        return;
      }
    }, halfHour);
  }

  onSubmit(e) {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      post: this.state.post,
      start: "test",
      end: "test"
    };
    this.props.createPost(newPost, this.props.history);
    this.setState({
      title: "",
      post: "",
      posted: true,
      started: false
    });
  }
  render() {
    let timerComponent;
    if (this.state.started) {
      timerComponent = <Timer />;
    }

    return (
      <div className="create-post__component">
        <h1 className="create-post__header">Create Post</h1>
        {timerComponent}
        <form className="post__form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title:"
            value={this.state.title}
            onChange={this.onChange}
          />
          <textarea
            type="textarea"
            name="post"
            placeholder="post:"
            onClick={this.setTimerStart}
            value={this.state.post}
            onChange={this.onChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  createPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost, getPosts }
)(withRouter(CreatePost));
