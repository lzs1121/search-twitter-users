import React, { Component } from 'react';

// Profile page has the object including follower count, photo
export default class ProfilePage extends Component{
    render() {
        return (
             <div>
                 {this.props.result}
             </div>
        );
    }
}