/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// show the search result 
// pass the props to profile page by Link
export default class Tweets extends Component {
    render() {
      return (
        <ul>
          {
            this.props.rets.map((ret, i) => (
                <li key={i}>
                  <Link to={{
                    pathname: '/profile',
                    state: {
                      result: ret
                    }
                  }}>
                    <p>{ret.name} has {ret.followers_count} followers</p>
                  </Link>
                  <div>
                    <img src={ret.profile_image_url} alt='' />
                  </div>
                </li>
            ))
          }
        </ul>
      )
    }
}