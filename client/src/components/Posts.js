import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getPosts } from "../actions/postActions";
import PostListItem from "./PostListItem";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.posts;
    let postComponents;

    if (!posts) {
      postComponents = <h3>No posts found!</h3>;
    } else {
      postComponents = posts
        .reverse()
        .map(postItem => (
          <PostListItem post={postItem} key={"post" + postItem._id} />
        ));
    }

    return <div className="posts">{postComponents}</div>;
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(withRouter(Posts));
