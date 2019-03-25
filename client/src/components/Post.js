import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPostById } from "../actions/postActions";

class Post extends Component {
  componentDidMount() {
    if (this.props.match.params.post_id) {
      this.props.getPostById(this.props.match.params.post_id);
    }
  }
  render() {
    const { post } = this.props.post;
    let title;
    let content;
    if (!post) {
      title = "No Post Available";
    } else {
      title = `${post.title}`;
      content = `${post.post}`;
    }

    return (
      <div className="posts">
        <div className="post">
          <h3 className="post__title">{title}</h3>
          <p className="post__content">{content}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPostById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostById }
)(withRouter(Post));
