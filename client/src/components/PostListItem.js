import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListItem extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(post.date);
    let dateData = date.toDateString();

    return (
      <div className="post">
        <h3 className="post__title">{post.title}</h3>
        <p className="post__date">{dateData}</p>
        <p className="post__content">{post.post}</p>
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListItem;
