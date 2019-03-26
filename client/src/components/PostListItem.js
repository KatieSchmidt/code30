import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListItem extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(post.date);
    let dateData = date.toDateString();
    let postWordCount = post.post.split(" ").length;
    let postInfo;
    if (postWordCount < 30) {
      postInfo = <p className="post__content-centered">{post.post}</p>;
    } else {
      postInfo = <p className="post__content">{post.post}</p>;
    }

    return (
      <div className="post">
        <h3 className="post__title">{post.title}</h3>
        <p className="post__date">{dateData}</p>
        {postInfo}
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListItem;
