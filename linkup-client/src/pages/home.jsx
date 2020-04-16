import React, { Component } from "react";
import Grid  from "@material-ui/core/Grid";
import axios from 'axios'; 
import PropTypes from 'prop-types'

import Post from '../components/Post';
import Profile from '../components/Profile';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';

class home extends Component {
  componentDidMount(){
    this.props.getPosts();

    // Alejandro's code from before(6 days ago), looks like this fix isn't needed anymore, I will leave it here for now just in case
    /*axios.defaults.baseURL = 'https://us-central1-linkup-ed6c5.cloudfunctions.net/api';
    axios.get('/posts')
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
    .catch(err => console.log(err));*/
  }
  render() {
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
    posts.map((post) => <Post key={post.postId} post={post}/>)
    ):( 
      <p>Loading...</p>
      );
    return (
      <Grid container spacing={2}>
        <Grid item sm ={8} xs={12}>
          {recentPostsMarkup}
        </Grid>
        <Grid item sm ={4} xs={12}>
          <Profile/>
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, { getPosts })(home);
 