import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if(posts === null || loading) {
      postContent = <Spinner />
    } else {
      postContent = <PostFeed posts={posts} />
    }

    return (
      <div className="feed">
        <div className="feed">
          <div className="feed">
            <div className="feed">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  post: state.post
});



export default connect(mapStateToProps, { getPosts })(Posts);
